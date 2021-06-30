import Stats from './_snowpack/pkg/statsjs.js'
import interact from './_snowpack/pkg/interactjs.js'
import presets from './presets.js'
import { GUI } from './_snowpack/pkg/dat.gui.js'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

// Globals
let radius,
  width,
  height,
  w2,
  h2,
  polygons = [],
  triangles = [],
  translations = [],
  generating = false,
  tokens = {},
  tokenSize,
  _pqr,
  queueTimeout,
  reverting,
  stop = false

const getPreset = () =>
  decodeURIComponent(location.hash.replace(/^#/, '')) || presets.preset
const preset = getPreset()
const settings = {
  ...(presets.remembered[preset] || presets.remembered[presets.preset])[0],
}
tokenSize = 10 ** settings.tokenPrecision
const FILL_COLOR_TYPES = ['none', 'plain', 'odd', 'colored']
const STROKE_COLOR_TYPES = ['none', 'plain', 'colored']

const size = force => {
  ;({ width, height } = document.body.getBoundingClientRect())
  if (!force && canvas.width === width && canvas.height === height) {
    return
  }
  canvas.width = width
  canvas.height = height
  w2 = width / 2
  h2 = height / 2
  const s2 = Math.min(w2, h2)
  radius = {
    inverted: 0.4 * s2,
    poincare: 0.9 * s2,
    klein: 0.9 * s2,
    band: 0.102 * h2,
    half: 0.102 * h2,
    ortho: 0.3 * s2,
  }[settings.projection]

  if (settings.projection === 'half') {
    h2 = height
  }
  render()
}

const stats = new Stats()
const showStats = { showStats: false }

const toDisk = ([x, y]) => [w2 + x * radius, h2 - y * radius]

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

const invertedFromHyperboloid = ([x, y, z]) => {
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

const projections = {
  poincare: poinCareFromHyperboloid,
  klein: kleinFromHyperboloid,
  inverted: invertedFromHyperboloid,
  band: bandFromHyperboloid,
  half: halfFromHyperboloid,
  ortho: orthoFromHyperboloid,
}

const fromHyperboloid = p => projections[settings.projection](p)

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

const getRootTriangle = () => {
  const pAngle = Math.PI / settings.p
  const qAngle = Math.PI / settings.q
  const rAngle = Math.PI / settings.r

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

const getToken = edges => {
  let str = []
  for (let i = 0; i < 3; i++) {
    str.push(
      String(~~Math.round(tokenSize * edges[i][0])).padStart(
        settings.tokenPrecision,
        '0'
      ) +
        '|' +
        String(~~Math.round(tokenSize * edges[i][1])).padStart(
          settings.tokenPrecision,
          '0'
        ) +
        '|' +
        String(~~Math.round(tokenSize * edges[i][2])).padStart(
          settings.tokenPrecision,
          '0'
        )
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

const getTriangles = (edges, order) => {
  if (stop) {
    return
  }
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
  for (let n = 0; n < settings.p * 2 - 1; n++) {
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
    color: `hsl(${order * settings.coloredShift}deg, 50%, 60%)`,
    order,
  }
  renderPolygon(polygon)
  polygons[order].push(polygon)
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
    1, //Math.sqrt(offset[0] * offset[0] + offset[1] * offset[1] + 1),
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
  const curve = !settings.straight && settings.projection !== 'klein'
  const pu = toDisk(fromHyperboloid(u))
  const pv = toDisk(fromHyperboloid(v))
  const realDist =
    curve && Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
  if (curve && realDist > 20 - settings.curvePrecision) {
    const ab = u[0] * v[0] + u[1] * v[1] - u[2] * v[2]
    const t2s = t => ab * t + Math.sqrt(t * t * (ab * ab - 1) + 1)
    let curveStep = Math.max(0.01, (20 - settings.curvePrecision) / realDist)
    for (let t = 1 - curveStep; t > 0; t -= curveStep) {
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

const renderPolygon = ({ vertices, color, center, order }) => {
  if (vertices.length < 3) return
  if (settings.fill === 'colored') {
    ctx.fillStyle = color
  } else if (settings.fill === 'odd') {
    ctx.fillStyle =
      order % 2 === 0 ? settings.fillColor : settings.fillColorEven
  }
  if (settings.stroke === 'colored') {
    ctx.strokeStyle = color
  }

  let polyVertices = []
  if (settings.r === 2) {
    // Optimization
    for (let i = 0; i < settings.p; i++) {
      polyVertices.push(vertices[(i * 2 + 1) % vertices.length])
    }
  } else {
    polyVertices = vertices
  }
  renderVertices(polyVertices, color)

  if (settings.wedges) {
    ctx.globalAlpha = settings.wedgesAlpha / 100
    ctx.fillStyle = settings.wedgesColor
    ctx.strokeStyle = settings.wedgesColor
    for (let i = 0; i < settings.p; i++) {
      renderVertices([
        center,
        vertices[(i * 2) % vertices.length],
        vertices[(i * 2 + 1) % vertices.length],
      ])
    }
    ctx.globalAlpha = 1
  }
}

const renderVertices = vertices => {
  ctx.beginPath()

  const p0 = toDisk(fromHyperboloid(vertices[0]))
  ctx.moveTo(p0[0], p0[1])

  for (let j = 0, m = vertices.length; j < m; j++) {
    line(vertices[j], vertices[(j + 1) % vertices.length])
  }

  settings.fill === 'none' || ctx.fill()
  settings.stroke === 'none' || ctx.stroke()
}

const renderPolygons = polygons => {
  for (let i = 0, l = polygons.length; i < l; i++) {
    renderPolygon(polygons[i])
  }
}

const asynced = (f, timeout) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(f())
    }, 1)
  )

const nextLayer = () => {
  const order = polygons.length
  const edgeses = triangles[order - 1]
  return Promise.all(
    edgeses.map(edges => asynced(() => getTriangles(edges, order)))
  )
}

const generate = async cont => {
  _pqr = { p: settings.p, q: settings.q, r: settings.r }
  if (generating) {
    return
  }
  generating = true

  if (!cont) {
    await render()
  } else {
    if (polygons.length > settings.layers) {
      polygons.splice(settings.layers)
      while (polygons.reduce((a, p) => a + p.length, 0) > settings.limit) {
        polygons.splice(settings.layers)
      }
    }
  }

  while (
    polygons.length < settings.layers &&
    polygons.reduce((a, p) => a + p.length, 0) < settings.limit
  ) {
    if (stop) {
      break
    }
    if (polygons.length === 0) {
      const root = getRootTriangle()
      await asynced(() => getTriangles(root, 0))
    } else {
      await asynced(() => nextLayer())
    }
  }

  generating = false
  stop = false
}

const regenerate = cont => {
  clearTimeout(queueTimeout)
  if (reverting) {
    return
  }
  if (!generating) {
    if (!cont) {
      stop = false
      polygons.length = 0
      triangles.length = 0
      for (let token in tokens) {
        delete tokens[token]
      }

      size(true)
    } else {
      if (polygons.length > settings.layers) {
        polygons.splice(settings.layers)
        render()
        return
      }
      if (polygons.reduce((a, p) => a + p.length, 0) > settings.limit) {
        while (
          polygons.length &&
          polygons.reduce((a, p) => a + p.length, 0) > settings.limit
        ) {
          polygons.pop()
        }
        render()
        return
      }
    }
    generate(cont)
  } else {
    stop = true
    queueTimeout = setTimeout(regenerate, 10)
  }
}

const render = async () => {
  showStats.showStats && stats.begin()

  ctx.fillStyle = settings.backgroundColor
  ctx.fillRect(0, 0, width, height)

  if (settings.fill !== 'colored') {
    ctx.fillStyle = settings.fillColor
  }
  if (settings.stroke !== 'colored') {
    ctx.strokeStyle = settings.strokeColor
  }

  // const renderQueue = renderPolygons(polygons[0], 0)

  for (let o = 0; o < polygons.length; o++) {
    /*await asynced(() => */ renderPolygons(polygons[o], o) /*)*/
  }
  showStats.showStats && stats.end()
}

const gui = new GUI({
  load: presets,
  preset,
})

gui.remember(settings)

const pqrCheckRegenerate = () => {
  if (reverting) {
    return
  }
  const a = [~~settings.p, ~~settings.q, ~~settings.r]
  const check = () => 1 / a[0] + 1 / a[1] + 1 / a[2] < 1
  while (!check()) {
    let i0 = ~~(Math.random() * 3)
    for (let i = 0; i < 3; i++) {
      for (let z = 0; z < 3; z++) {
        a[(i0 + i) % 3]++
        if (check()) {
          break
        }
        if (i < 2) {
          a[(i0 + i) % 3]--
        }
      }
    }
  }
  settings.p !== a[0] && (settings.p = a[0])
  settings.q !== a[1] && (settings.q = a[1])
  settings.r !== a[2] && (settings.r = a[2])

  if (settings.p !== _pqr.p || settings.q !== _pqr.q || settings.r !== _pqr.r) {
    regenerate()
  }
}

gui.add(settings, 'projection', Object.keys(projections)).onChange(() => {
  size(true)
  render()
})
gui.add(settings, 'p', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'q', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'r', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'layers', 1, 100, 1).onChange(() => regenerate(true))
gui.add(settings, 'limit', 1).onChange(() => regenerate(true))
gui.add(settings, 'coloredShift', -359, 359, 1).onChange(() => regenerate())
gui.add(settings, 'fill', FILL_COLOR_TYPES).onChange(render)
gui.addColor(settings, 'fillColor').onChange(render)
gui.addColor(settings, 'fillColorEven').onChange(render)
gui.add(settings, 'stroke', STROKE_COLOR_TYPES).onChange(render)
gui.addColor(settings, 'strokeColor').onChange(render)
gui.addColor(settings, 'backgroundColor').onChange(render)
gui.add(settings, 'straight').onChange(render)
gui.add(settings, 'wedges').onChange(render)
gui.addColor(settings, 'wedgesColor').onChange(render)
gui.add(settings, 'wedgesAlpha', 0, 100, 1).onChange(render)
gui.add(settings, 'tokenPrecision', 0, 16, 1).onChange(() => {
  tokenSize = 10 ** settings.tokenPrecision
  regenerate()
})
gui.add(settings, 'curvePrecision', 0, 20, 1).onChange(() => regenerate())
gui.add(
  {
    recenter: () => {
      stop = true
      translations.length = 0
      regenerate()
    },
  },
  'recenter'
)

gui.add(showStats, 'showStats').onChange(v => stats.showPanel(v ? 0 : null))

if (window.innerWidth < 600) {
  gui.close()
}
gui.__preset_select.addEventListener('change', ({ target: { value } }) => {
  location.hash = `#${encodeURIComponent(value)}`
})
window.addEventListener('hashchange', () => {
  if (gui.preset !== getPreset()) {
    gui.preset = getPreset()
  }
})
const oldRevert = gui.revert.bind(gui)
gui.revert = () => {
  stop = true
  translations.length = 0
  reverting = true
  oldRevert()
  reverting = false
  regenerate()
}

interact('canvas')
  .draggable({
    listeners: {
      move: e => {
        if (e.ctrlKey) {
          rotate(-e.dx / (2 * radius))
        } else if (e.shiftKey) {
          // scale(1 + e.dy / (2 * radius))
        } else {
          translate([e.dx / w2, -e.dy / h2])
        }
        render()
      },
    },
  })
  .gesturable({
    onmove: e => {
      rotate(-(Math.PI * e.da) / 180)
      // scale(1 + e.ds)
      render()
    },
  })

window.ondeviceorientation = window.onresize = size
window.hyperball = {
  polygons,
  tokens,
  translate,
  translations,
  render,
}

document.body.appendChild(canvas)
document.body.appendChild(stats.dom)
stats.showPanel(null)
size()
generate()
