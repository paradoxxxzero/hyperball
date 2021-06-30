import Stats from 'stats.js'
import interact from 'interactjs'
import { parse } from 'qs'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

let radius,
  width,
  height,
  w2,
  h2,
  polygons = [],
  triangles = [],
  translations = [],
  generating = false

const {
  p = 5,
  q = 4,
  r = 2,
  layers = 20,
  maxPolys = 1000,
  colored = 37,
  stats = false,
  fill = 'colored',
  stroke = false,
  straight = false,
  wedges = false,
  tokenPrecision = 2,
  curvePrecision = 10,
  projection = 'poincare',
  a = 1,
} = Object.fromEntries(
  Object.entries(parse(location.search, { ignoreQueryPrefix: true })).map(
    ([k, v]) => [
      k,
      [
        'p',
        'q',
        'r',
        'maxPolys',
        'layers',
        'colored',
        'tokenPrecision',
        'curvePrecision',
      ].includes(k)
        ? +v
        : ['stats', 'straight'].includes(k)
        ? v !== false
        : ['fill', 'stroke', 'wedges'].includes(k)
        ? v === ''
          ? {
              stroke: 'rgba(255, 255, 255, .2)',
              fill: 'blue',
              wedges: 'rgba(0, 0, 0, .2)',
            }[k]
          : v
        : v,
    ]
  )
)
let curve = !straight && projection !== 'klein'
let limit = maxPolys

const size = () => {
  ;({ width, height } = document.body.getBoundingClientRect())
  if (canvas.width === width && canvas.height === height) {
    return
  }
  canvas.width = width
  canvas.height = height
  w2 = width / 2
  h2 = height / 2
  const s2 = Math.min(w2, h2)
  radius = {
    inv: 0.3 * s2,
    poincare: 0.9 * s2,
    klein: 0.9 * s2,
    band: 0.102 * h2,
    half: 0.102 * h2,
    ortho: 0.3 * s2,
  }[projection]

  if (projection === 'half') {
    h2 = height
  }
  render()
}

const statsPanel = stats && new Stats()
statsPanel && document.body.appendChild(statsPanel.dom)

const toDisk = ([x, y]) => [w2 + x * radius, h2 - y * radius]
const fromDisk = ([x, y]) => [(x - w2) / radius, (h2 - y) / radius]

const toHyperboloid = ([x, y]) => {
  const s = x * x + y * y
  const nr = 1 / 1 - s
  return [2 * x * nr, 2 * y * nr, (1 + s) * nr]
}

const poinCareFromHyperboloid = ([x, y, z]) => {
  const nr = 1 / (1 + z)
  return [x * nr, y * nr]
}

const kleinFromHyperboloid = ([x, y, z]) => {
  // 2 * z / (1 + z.z)
  const [X, Y] = poinCareFromHyperboloid([x, y, z])
  const nr = 1 / (1 + (X * X + Y * Y))
  return [2 * X * nr, 2 * Y * nr]
}

const orthoFromHyperboloid = ([x, y, z]) => {
  // z
  return [x, y]
}

const invFromHyperboloid = ([x, y, z]) => {
  // z / z.z
  const [X, Y] = poinCareFromHyperboloid([x, y, z])
  const nr = 1 / (X * X + Y * Y)
  return [X * nr, Y * nr]
}

const bandFromHyperboloid = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poinCareFromHyperboloid([x, y, z])
  const k = 4 * Math.PI * 0.5
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}

const halfFromHyperboloid = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poinCareFromHyperboloid([x, y, z])
  const X2 = X * X
  const Y1 = Y - 1
  const k = -1 / (X2 + Y1 * Y1)
  return [2 * X * k, (X2 + Y1 * (Y + 1)) * k]
}

const fromHyperboloid = {
  poincare: poinCareFromHyperboloid,
  klein: kleinFromHyperboloid,
  inv: invFromHyperboloid,
  band: bandFromHyperboloid,
  half: halfFromHyperboloid,
  ortho: orthoFromHyperboloid,
}[projection]

const normalize = ([x, y, z]) => {
  const s = z < 0 ? -1 : 1
  const k = s / Math.sqrt(-x * x - y * y + z * z)
  return [x * k, y * k, z * k]
}

const intersect = ([xa, ya, za], [xb, yb, zb]) => {
  const cross = [
    //
    ya * zb - za * yb,
    za * xb - xa * zb,
    ya * xb - xa * yb, // hyper cross : -z
  ]
  return normalize(cross)
}

const reflect = (point, reflector) => {
  const [x, y, z] = point
  const [a, b, c] = reflector

  const xyzabc = x * a + y * b - z * c
  const abcabc = a * a + b * b - c * c
  const k = (2 * xyzabc) / abcabc

  return [x - k * a, y - k * b, z - k * c]
}

const getRootTriangle = (p, q, r) => {
  const pAngle = Math.PI / p
  const qAngle = Math.PI / q
  const rAngle = Math.PI / r

  const a =
    (Math.cos(pAngle) * Math.cos(qAngle) + Math.cos(rAngle)) / Math.sin(pAngle)
  const b = Math.cos(qAngle)
  const c = Math.sqrt(a * a + b * b - 1)

  return [
    [-b, a, c],
    [-Math.cos(pAngle), -Math.sin(pAngle), 0],
    [1, 0, 0],
  ]
}

const getTrianglesSmart = (edges, p, q, r, order = 1, m, oddity = false) => {
  if (order > 2) return
  order > 1 && reflectOn(edges, 0, order)
  for (let n = 0; n < p * 2 - (order === 1 ? 0 : 1); n++) {
    reflectOn(edges, 1 + (n % 2), order)
    const skip = order === 1 || r > 2 ? -1 : oddity ? 2 : 0
    const stop = 2 * (p - (m < r * 2 ? m % 2 : 1))
    if (n > skip && (r !== 2 || n % 2 === 0) && (order === 1 || n < stop)) {
      getTrianglesSmart(
        [...edges],
        p,
        q,
        r,
        order + 1,
        n,
        p > 3 && order > 1 && (n === 2 || (oddity && n === 4))
      )
    }
  }
}

const fact = 10 ** tokenPrecision
const tokens = {}
const getToken = edges => {
  let str = []
  for (let i = 0; i < 3; i++) {
    str.push(
      String(~~Math.round(fact * edges[i][0])).padStart(tokenPrecision, '0') +
        '|' +
        String(~~Math.round(fact * edges[i][1])).padStart(tokenPrecision, '0') +
        '|' +
        String(~~Math.round(fact * edges[i][2])).padStart(tokenPrecision, '0')
    )
  }
  return str.sort().join('/')
}

const reflectOn = (edges, i) => {
  let j = (i + 1) % 3
  let k = (i + 2) % 3
  edges[j] = reflect(edges[j], edges[i])
  edges[k] = reflect(edges[k], edges[i])
  edges[i] = edges[i].map(x => -x)

  const token = getToken(edges)
  if (tokens[token]) {
    return false
  }
  tokens[token] = true
  return true
}

const getTriangles = (edges, p, order) => {
  edges = [...edges]
  polygons[order] = polygons[order] || []
  triangles[order] = triangles[order] || []

  const vertices = []
  if (order > 0) {
    if (!reflectOn(edges, 0)) {
      return
    }
  }

  vertices.push(invertTriangle(edges)[0])
  triangles[order].push([...edges])

  const center = invertTriangle(edges)[1]
  for (let n = 0; n < p * 2 - 1; n++) {
    if (reflectOn(edges, 1 + (n % 2))) {
      vertices.push(invertTriangle(edges)[((n + 1) % 2) * 2])
      triangles[order].push([...edges])
    }
  }

  for (let t = 0; t < translations.length; t++) {
    hyperbolicTranslate(center, translations[t])
    for (let v = 0; v < vertices.length; v++) {
      hyperbolicTranslate(vertices[v], translations[t])
    }
  }

  const polygon = {
    vertices,
    center,
    color: `hsla(${order * colored}deg, 50%, 60%, ${a})`,
  }
  renderPolygon(polygon)
  polygons[order].push(polygon)
}

const getControl = (x1, y1, x2, y2) => {
  // https://sunsite.ubc.ca/~cass/research/pdf/NE.pdf
  // z0 = (z1 + z2) / 2
  // w = z0 - z1
  // T = 2 (z0 . iw) / (|w|² + 1 - |z0|²)
  // theta = 2 atan(T)
  // v1 = 2 w (1 + iT)(theta/2T)
  // v2 = 2 w (1 - iT)(theta/2T)
  // P1 = z1 + (1/3) v1
  // P2 = z2 - (1/3) v2
  const T = (x2 * y1 - x1 * y2) / (1 - x1 * x2 - y1 * y2) || 1e-9
  const e = Math.atan(T) / (3 * T)
  const dx = x2 - x1
  const dy = y2 - y1
  const Tdx = T * dx
  const Tdy = T * dy

  return [
    x1 + (dx + Tdy) * e,
    y1 + (dy - Tdx) * e,
    x2 - (dx - Tdy) * e,
    y2 - (dy + Tdx) * e,
  ]
}

const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt, zt] = offset

  const tt2 = xt * xt + yt * yt
  if (tt2 < 1e-9) {
    return
  }
  const xb = xt * (zt + 1)
  const yb = yt * (zt + 1)
  const zb = -tt2
  const pb = xe * xb + ye * yb - ze * zb
  const bb = xb * xb + yb * yb - zb * zb
  const k = (2 * pb) / bb
  const [x, y, z] = [xe - k * xb, ye - k * yb, ze - k * zb]
  const l = (2 * (xt * x + yt * y)) / tt2
  vertex[0] = x - l * xt
  vertex[1] = y - l * yt
  vertex[2] = z
}

const hyperbolicRotate = (vertex, theta) => {
  // Rotation is the same as in euclidean space
  const [x, y] = vertex
  const c = Math.cos(theta)
  const s = Math.sin(theta)
  vertex[0] = x * c - y * s
  vertex[1] = x * s + y * c
}

const hyperbolicScale = (vertex, scale) => {
  vertex[0] = Math.cosh(scale * Math.acosh(vertex[2]))
  vertex[1] = Math.cosh(scale * Math.acosh(vertex[2]))
  vertex[2] = Math.sqrt(vertex[0] ** 2 + vertex[1] ** 2 + 1)
}

const hyperbolicGyration = (p1, p2, p3) => {
  const [xa, ya] = p1
  const [xb, yb] = p2
  const [xc, yc] = p3
  const a = 1 + xa * xb + ya * yb
  const b = xb * ya - xa * yb
  const c = a
  const d = -b
  const nr = c * c + d * d
  const x = (a * c + b * d) / nr
  const y = (b * c - a * d) / nr
  return [x * xc - y * yc, y * xc + yc * x]
}

const poincareTranslate = (vertex, offset, s = 1) => {
  // https://www.researchgate.net/publication/268710591_Gyrovector_spaces_and_their_differential_geometry
  // Mobius addition
  // u (+) v = ((1 + 2/s² u . v + 1 / s² ||v||²) u + (1 - 1 / s² ||u||²) v) / (1 + 2/s² u . v + 1 / s⁴ ||u||² ||v||²)
  const [xa, ya] = offset
  const [xb, yb] = vertex

  const bb = xb * xb + yb * yb
  const aa = xa * xa + ya * ya
  const ab = xa * xb + ya * yb

  const invs2 = 1 / (s * s)

  const w = 1 / (1 + 2 * invs2 * ab + invs2 * invs2 * aa * bb)

  const u = (1 + (2 * ab + bb)) * w
  const v = (1 - invs2 * aa) * w

  vertex[0] = xa * u + xb * v
  vertex[1] = ya * u + yb * v
}

const poincareEinsteinScale = (vertex, scale, s = 1) => {
  // Einstein scalar multiplication
  // r (x) v = s * tanh(r * atanh(||v|| / s)) * v / ||v||
  const [x, y] = vertex
  const norm = Math.sqrt(x * x + y * y)
  const fact = s * Math.tanh(scale * Math.atanh(norm / s))
  vertex[0] = fact * (x / norm)
  vertex[1] = fact * (y / norm)
}
const poincareUngarScale = (vertex, scale, s = 1) => {
  // Ungar scalar multiplication
  // s * sinh(r * asinh(||v|| / s)) * v / ||v||
  const [x, y] = vertex
  const norm = Math.sqrt(x * x + y * y)
  const fact = s * Math.sinh(scale * Math.asinh(norm / s))
  vertex[0] = fact * (x / norm)
  vertex[1] = fact * (y / norm)
}

const invertTriangle = points => {
  const inverted = []
  for (let i = 0; i < points.length; i++) {
    inverted.push(intersect(points[i], points[(i + 1) % points.length]))
  }
  return inverted
}

const translate = offset => {
  const translation = [
    ...offset,
    Math.sqrt(offset[0] * offset[0] + offset[1] * offset[1] + 1),
  ]
  translations.push(translation)
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      hyperbolicTranslate(center, translation)
      for (let j = 0; j < vertices.length; j++) {
        hyperbolicTranslate(vertices[j], translation)
      }
    }
  }
}

const rotate = theta => {
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      hyperbolicRotate(center, theta)
      for (let j = 0; j < vertices.length; j++) {
        hyperbolicRotate(vertices[j], theta)
      }
    }
  }
}

const scale = scale => {
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      hyperbolicScale(center, scale)
      for (let j = 0; j < vertices.length; j++) {
        hyperbolicScale(vertices[j], scale)
      }
    }
  }
}

const line = (u, v) => {
  const pu = toDisk(fromHyperboloid(u))
  const pv = toDisk(fromHyperboloid(v))
  const realDist =
    curve && Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
  if (curve && realDist > curvePrecision) {
    const ab = u[0] * v[0] + u[1] * v[1] - u[2] * v[2]
    const t2s = t => ab * t + Math.sqrt(t * t * (ab * ab - 1) + 1)
    let curveStep = curvePrecision / realDist
    for (let i = 1 - curveStep; i > 0; i -= curveStep) {
      const t = i
      const s = t2s(t)
      const T = [
        //
        u[0] * t + v[0] * s,
        u[1] * t + v[1] * s,
        u[2] * t + v[2] * s,
      ]
      const p = toDisk(fromHyperboloid(T))
      ctx.lineTo(p[0], p[1])
    }
  }
  ctx.lineTo(pv[0], pv[1])
}

const renderPolygon = ({ vertices, color, center }) => {
  const polyVertices = []
  for (let i = 0; i < p; i++) {
    polyVertices.push(vertices[(i * 2 + 1) % vertices.length])
  }
  renderVertices(polyVertices, color)
  if (wedges) {
    for (let i = 0; i < p; i++) {
      renderVertices(
        [
          center,
          vertices[(i * 2) % vertices.length],
          vertices[(i * 2 + 1) % vertices.length],
        ],
        wedges
      )
    }
  }
}

const renderVertices = (vertices, color) => {
  if (fill === 'colored') {
    ctx.fillStyle = color
  }
  if (stroke === 'colored') {
    ctx.strokeStyle = color
  }

  ctx.beginPath()
  const p0 = toDisk(fromHyperboloid(vertices[0]))
  ctx.moveTo(p0[0], p0[1])

  for (let j = 0, m = vertices.length; j < m; j++) {
    line(vertices[j], vertices[(j + 1) % vertices.length])
  }

  fill && ctx.fill()
  stroke && ctx.stroke()
}

const renderPolygons = polygons => {
  for (let i = 0, l = polygons.length; i < l; i++) {
    renderPolygon(polygons[i])
  }
}

const asynced = f =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(f())
    }, 1)
  )

const nextLayer = () => {
  const order = polygons.length
  const edgeses = triangles[order - 1]
  return Promise.all(
    edgeses.map(edges => asynced(() => getTriangles(edges, p, order)))
  )
}

const generate = async newLayer => {
  if (generating) {
    return
  }
  generating = true
  if (!newLayer) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)
    newLayer = layers
  }

  while (
    polygons.length < newLayer &&
    polygons.reduce((a, p) => a + p.length, 0) < limit
  ) {
    if (polygons.length === 0) {
      const root = getRootTriangle(p, q, r)
      await asynced(() => getTriangles(root, p, 0))
    } else {
      await nextLayer()
    }
  }

  generating = false
}

const regenerate = () => {
  polygons.length = 0
  triangles.length = 0
  size()
  generate()
}

const render = async () => {
  statsPanel && statsPanel.begin()
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width, height)

  if (fill !== 'colored') {
    ctx.fillStyle = fill
  }
  if (stroke !== 'colored') {
    ctx.strokeStyle = stroke
  }

  // const renderQueue = renderPolygons(polygons[0], 0)

  for (let o = 0; o < polygons.length; o++) {
    /*await asynced(() => */ renderPolygons(polygons[o], o) /*)*/
  }
  statsPanel && statsPanel.end()
}

interact('canvas')
  .draggable({
    listeners: {
      move: e => {
        if (e.ctrlKey) {
          rotate(-e.dx / (2 * radius))
        } else if (e.shiftKey) {
          scale(1 + e.dy / (2 * radius))
        } else {
          translate([e.dx / (2 * radius), -e.dy / (2 * radius)])
        }
        render()
      },
    },
  })
  .gesturable({
    onmove: e => {
      rotate(-(Math.PI * e.da) / 180)
      scale(1 + e.ds)
      render()
    },
  })
  .on('doubletap', () => {
    limit = polygons[polygons.length - 1].length * (p - 1 + q / 5)
    generate(polygons.length + 1)
  })

window.ondeviceorientation = window.onresize = size
window.hyperball = {
  polygons,
  tokens,
  translate,
  translations,
  render,
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(canvas)
  size()
  if (p * q + p * r + q * r >= p * q * r) {
    console.log('BAD pqr', p, q, r, p * q + p * r + q * r, '>=', p * q * r)
    return
  }
  generate()

  // H x² + y² - z² = -1
  // const ux = 0.5
  // const uy = 1
  // const vx = -0.75
  // const vy = 1
  // const u = [ux, uy, Math.sqrt(ux * ux + uy * uy + 1)]
  // const v = [vx, vy, Math.sqrt(vx * vx + vy * vy + 1)]

  // ctx.fillStyle = 'white'
  // ctx.fillRect(0, 0, width, height)
  // ctx.fillStyle = 'black'
  // ctx.ellipse(w2, h2, radius, radius, 0, 0, 2 * Math.PI)
  // ctx.fill()

  // const pr = 6

  // ctx.fillStyle = 'red'
  // const [upx, upy] = toDisk(fromHyperboloid(u))
  // ctx.fillRect(upx - pr / 2, upy - pr / 2, pr, pr)

  // ctx.fillStyle = 'blue'
  // const [vpx, vpy] = toDisk(fromHyperboloid(v))
  // ctx.fillRect(vpx - pr / 2, vpy - pr / 2, pr, pr)

  // ctx.beginPath()
  // ctx.moveTo(upx, upy)
  // ctx.strokeStyle = 'green'
  // const v1 = fromHyperboloid(u)
  // const v2 = fromHyperboloid(v)
  // const [x1, y1, x2, y2] = getControl(v1[0], v1[1], v2[0], v2[1])
  // const p1 = toDisk([x1, y1])
  // const p2 = toDisk([x2, y2])
  // const vv2 = toDisk(v2)
  // ctx.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], vv2[0], vv2[1])
  // ctx.stroke()

  // ctx.strokeStyle = 'cyan'
  // ctx.beginPath()
  // ctx.moveTo(upx, upy)
  // line(u, v)
  // const ab = u[0] * v[0] + u[1] * v[1] - u[2] * v[2]
  // const ab2 = ab * ab
  // const t2s = t => Math.sqrt(t * t * (ab2 - 1) + 1) + ab * t
  // let last = [upx, upy]
  // const ds = []
  // for (let i = 0.999; i > 0; i -= 0.01) {
  //   const t = Math.atanh(i ** 2) / 100 // i ** 7
  //   // if (t > 0.005) continue
  //   const s = t2s(t)
  //   const T = [
  //     //
  //     u[0] * t + v[0] * s,
  //     u[1] * t + v[1] * s,
  //     u[2] * t + v[2] * s,
  //   ]

  //   let pt = toDisk(fromHyperboloid(T))
  //   let d = (last[0] - pt[0]) ** 2 + (last[1] - pt[1]) ** 2
  //   ds.push(d)
  //   ctx.lineTo(...pt)
  //   last = pt
  // }
  // console.log(ds.length, ds.reduce((a, b) => a + b, 0) / ds.length)
  // ctx.lineTo(vpx, vpy)
  // ctx.stroke()
})
