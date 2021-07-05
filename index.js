import Stats from 'stats.js'
import interact from 'interactjs'
import presets from './presets'
import { GUI } from 'dat.gui'
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  DynamicDrawUsage,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const renderer = new WebGLRenderer({
  antialias: true,
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new Scene()

const camera = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
)
camera.position.set(0, 0, -1)
camera.lookAt(0, 0, 10)
camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
camera.updateProjectionMatrix()

// const ambientLight = new AmbientLight(0x999999)
// scene.add(ambientLight)

// const pointLight = new PointLight(0xffffff, 1)
// camera.add(pointLight)

scene.add(camera)
const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 0
controls.maxDistance = 100
controls.enabled = false

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const positions = new Float32Array(3 * 100000)
const colors = new Float32Array(100000)
const geometry = new BufferGeometry()
geometry.setAttribute(
  'position',
  new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
)
geometry.setAttribute(
  'color',
  new BufferAttribute(colors, 3).setUsage(DynamicDrawUsage)
)
const mat = new MeshBasicMaterial({ vertexColors: true, side: DoubleSide })
const mesh = new Mesh(geometry, mat)
scene.add(mesh)
const index = []
let pos = 0

// Globals
let radius,
  width,
  height,
  w2,
  h2,
  polygons = [],
  triangles = [],
  transformations = [],
  generating = false,
  tokens = [],
  tokenSize,
  _pqr,
  queueTimeout,
  reverting,
  backend = '2d',
  stop = false,
  model

const getModel = ({ p, q, r }) => {
  const anglesSum = 1 / p + 1 / q + 1 / r
  return anglesSum === 1
    ? 'parabolic'
    : anglesSum < 1
    ? 'hyperbolic'
    : 'elliptic'
}

const getPreset = () =>
  decodeURIComponent(location.hash.replace(/^#/, '')) || presets.preset
const preset = getPreset()
const settings = {
  ...(presets.remembered[preset] || presets.remembered[presets.preset])[0],
}
tokenSize = 10 ** settings.tokenPrecision
model = getModel(settings)
const FILL_COLOR_TYPES = ['none', 'plain', 'odd', 'colored']
const STROKE_COLOR_TYPES = ['none', 'plain', 'colored']

const size = force => {
  ;({ width, height } = document.body.getBoundingClientRect())
  if (!force && canvas.width === width && canvas.height === height) {
    return
  }
  camera.aspect = window.innerWidth / window.innerHeight
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)

  canvas.width = width
  canvas.height = height

  w2 = width / 2
  h2 = height / 2
  const s2 = Math.min(w2, h2)
  radius = {
    poincare: 0.9 * s2,
    klein: 0.9 * s2,
    inverted: 0.4 * s2,
    band: 0.102 * h2,
    half: 0.102 * h2,
    stereographic: 0.9 * s2,
    orthographic: 0.3 * s2,
    joukowsky: 0.8 * w2,
  }[settings.projection]

  if (settings.projection === 'half') {
    h2 = height
  }
  render()
}

const stats = new Stats()
const showStats = { showStats: false, '3dControls': false }

const toDisk = ([x, y]) => [w2 + x * radius, h2 - y * radius]

const poincare = ([x, y, z]) => {
  // z = 1
  const nr = 1 / (1 + z)
  return [x * nr, y * nr]
}

const klein = ([x, y, z]) => {
  // z = 0
  const nr = 1 / z
  return [x * nr, y * nr]
}

const orthographic = ([x, y, z]) => {
  // No z
  return [x, y]
}

const inverted = ([x, y, z]) => {
  // z = -1
  const nr = 1 / (-1 + z)
  return [x * nr, y * nr]
}

const band = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poincare([x, y, z])
  const k = 4 * Math.PI * 0.5
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}

const half = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poincare([x, y, z])
  const X2 = X * X
  const Y1 = Y - 1
  const k = -1 / (X2 + Y1 * Y1)
  return [2 * X * k, (X2 + Y1 * (Y + 1)) * k]
}

const joukowsky = ([x, y, z]) => {
  const [X, Y] = poincare([x, y, z])
  const nr = 1 / (2 * (X * X + Y * Y))

  return [X * (0.5 + nr), Y * (0.5 - nr)]
}

const stereographic = ([x, y, z]) => {
  // z = 0
  const nr = 1 / (1 - z)
  return [x * nr, y * nr]
}

const projections = {
  poincare: poincare,
  klein: klein,
  inverted: inverted,
  band: band,
  half: half,
  orthographic: orthographic,
  joukowsky: joukowsky,
  stereographic: stereographic,
}

const views = ['3d poincare', '3d klein', '3d inverted', '3d inside']

const project = p => projections[settings.projection](p)

const normalize = ([x, y, z]) => {
  if (model === 'hyperbolic') {
    const k = Math.sign(z) / Math.sqrt(-x * x - y * y + z * z)
    return [x * k, y * k, z * k]
  } else {
    const k = 1 / Math.sqrt(x * x + y * y + z * z)
    return [x * k, y * k, z * k]
  }
}

const sign = () => (model === 'hyperbolic' ? -1 : model === 'parabolic' ? 0 : 1)

const dot = ([xa, ya, za], [xb, yb, zb]) => xa * xb + ya * yb + sign() * za * zb

const cross = ([xa, ya, za], [xb, yb, zb]) => [
  ya * zb - za * yb,
  za * xb - xa * zb,
  sign() * (xa * yb - ya * xb),
]

const bisect = (a, b) => intersect(cross(a, b), 0.5 * (a + b))

const reflect = (a, b) => {
  const ab2 = (2 * dot(a, b)) / dot(b, b)
  return [a[0] - ab2 * b[0], a[1] - ab2 * b[1], a[2] - ab2 * b[2]]
}

const intersect = (a, b) => normalize(cross(a, b))

const getRootTriangle = () => {
  const pAngle = Math.PI / settings.p
  const qAngle = Math.PI / settings.q
  const rAngle = Math.PI / settings.r

  const a =
    (Math.cos(pAngle) * Math.cos(qAngle) + Math.cos(rAngle)) / Math.sin(pAngle)
  const b = Math.cos(qAngle)
  const c = Math.sqrt(sign() * (1 - a * a - b * b))

  return [
    [1, 0, 0],
    [-Math.cos(pAngle), Math.sin(pAngle), 0],
    [b, a, c],
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

// const reflectOn = (edges, i, order) => {
//   let j = (i + 1) % 3
//   let k = (i + 2) % 3
//   edges[j] = reflect(edges[j], edges[i])
//   edges[k] = reflect(edges[k], edges[i])
//   edges[i] = [-edges[i][0], -edges[i][1], -edges[i][2]]

//   const token = getToken(edges)
//   for (let i = order; i >= 0; i--) {
//     if (tokens[i][token]) {
//       return false
//     }
//   }
//   tokens[order][token] = true
//   return true
// }

const reflectOn = (edges, i, order) => {
  let j = (i + 1) % 3
  let k = (i + 2) % 3
  edges[j] = reflect(edges[j], edges[i])
  edges[k] = reflect(edges[k], edges[i])
  edges[i] = [-edges[i][0], -edges[i][1], -edges[i][2]]

  const token = getToken(edges)
  for (let i = order; i >= 0; i--) {
    if (tokens[i][token]) {
      return false
    }
  }
  tokens[order][token] = true
  return true
}

const getTriangles = (edges, order) => {
  if (stop || polygons.reduce((a, p) => a + p.length, 0) >= settings.limit) {
    return
  }
  edges = [...edges]
  polygons[order] = polygons[order] || []
  triangles[order] = triangles[order] || []
  tokens[order] = tokens[order] || {}

  const vertices = []
  if (order > 0) {
    if (!reflectOn(edges, 2, order)) {
      return
    }
  } else {
    tokens[order][getToken(edges)] = true
  }
  /*

  |q\
  |  \   2
  |   \
0 |   r\
  |   /
  |p/   1
  
  C
  */

  const center =
    order % 2 === 1
      ? intersect(edges[1], edges[0])
      : intersect(edges[0], edges[1])
  if (order % 2 === 1) {
    vertices.push(intersect(edges[2], edges[0]))
    vertices.push(intersect(edges[1], edges[2]))
  } else {
    vertices.push(intersect(edges[0], edges[2]))
    vertices.push(intersect(edges[2], edges[1]))
  }
  triangles[order].push([...edges])

  for (let n = 0; n < settings.p * 2 - 1; n++) {
    if (reflectOn(edges, (n + 1) % 2, order)) {
      if (order % 2 === 1) {
        vertices.push(intersect(edges[n % 2], edges[2]))
      } else {
        vertices.push(intersect(edges[2], edges[n % 2]))
      }
      triangles[order].push([...edges])
    }
  }

  for (let t = 0; t < transformations.length; t++) {
    const { type, parameter } = transformations[t]
    const trans =
      model === 'hyperbolic'
        ? type === 'scale'
          ? hyperbolicScale
          : hyperbolicTranslate
        : type === 'scale'
        ? ellipticScale
        : ellipticTranslate
    trans(center, parameter)
    for (let v = 0; v < vertices.length; v++) {
      trans(vertices[v], parameter)
    }
  }
  const polygon = {
    vertices,
    center,
    order,
  }
  renderPolygon(polygon)
  polygons[order].push(polygon)
}

const ellipticTranslate = (vertex, offset) => {
  let [xe, ye, ze] = vertex
  const [xt, yt, zt] = offset
  const cxt = Math.cos(Math.asin(xt))
  const cyt = Math.cos(Math.asin(yt))
  vertex[0] = xe
  vertex[1] = ye * cyt - ze * yt
  vertex[2] = ye * yt + ze * cyt
  ;[xe, ye, ze] = vertex
  vertex[0] = xe * cxt + ze * xt
  vertex[2] = -xe * xt + ze * cxt
}

const ellipticScale = (vertex, scale) => {
  const [xe, ye, ze] = vertex
  const nr = scale / Math.sqrt(xe * xe + ye * ye + ze * ze)
  const offset = [vertex[0] * nr, vertex[1] * nr, vertex[2] * nr]
  ellipticTranslate(vertex, offset)
}

const hyperbolicTranslate = (vertex, offset) => {
  let [xe, ye, ze] = vertex
  const [xt, yt, zt] = offset

  const cxt = Math.cosh(Math.asinh(xt))
  const cyt = Math.cosh(Math.asinh(yt))
  vertex[0] = xe
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = ye * yt + ze * cyt
  ;[xe, ye, ze] = vertex
  vertex[0] = xe * cxt - ze * xt
  vertex[2] = -xe * xt + ze * cxt
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
  const [xe, ye, ze] = vertex
  const nr = scale / Math.sqrt(xe * xe + ye * ye + ze * ze)
  const offset = [vertex[0] * nr, vertex[1] * nr, vertex[2] * nr]
  hyperbolicTranslate(vertex, offset)
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

const translate = offset => {
  const translation = [...offset, 1]
  transformations.push({ type: 'translate', parameter: translation })
  const translator =
    model === 'hyperbolic' ? hyperbolicTranslate : ellipticTranslate
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      translator(center, translation)
      for (let j = 0; j < vertices.length; j++) {
        translator(vertices[j], translation)
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
  transformations.push({ type: 'scale', parameter: scale })
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
  const pu = toDisk(project(u))
  const pv = toDisk(project(v))
  const realDist =
    curve && Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
  if (curve && realDist > 20 - settings.curvePrecision) {
    const ab = dot(u, v)
    const t2s = t => Math.sqrt(t * t * (ab * ab - 1) + 1) - sign() * ab * t
    let curveStep = Math.max(0.01, (20 - settings.curvePrecision) / realDist)
    for (let t = 1 - curveStep; t > 0; t -= curveStep) {
      const s = t2s(t)
      const T = [
        //
        u[0] * t + v[0] * s,
        u[1] * t + v[1] * s,
        u[2] * t + v[2] * s,
      ]
      const p = toDisk(project(T))
      if (
        settings.projection === 'orthographic' &&
        (p[0] > width || p[0] < 0 || p[1] > height || p[1] < 0)
      ) {
        break
      }
      ctx.lineTo(p[0], p[1])
    }
  }
  ctx.lineTo(pv[0], pv[1])
}

const renderPolygon = ({ vertices, center, order }) => {
  if (vertices.length < 2) {
    return
  }
  if (backend === '3d') {
    const color = new Color()
    color.setHSL(((order * settings.coloredShift) % 360) / 360, 0.5, 0.6)

    for (let i = 0; i < settings.p * 2; i++) {
      render3dVertices(
        [
          center,
          vertices[i % vertices.length],
          vertices[(i + 1) % vertices.length],
        ],
        color
      )
    }
    return
  }
  const color = `hsl(${order * settings.coloredShift}deg, 50%, 60%)`
  if (settings.fill === 'colored') {
    ctx.fillStyle = color
  } else if (settings.fill === 'odd') {
    ctx.fillStyle =
      order % 2 === 0 ? settings.fillColor : settings.fillColorEven
  }
  if (settings.stroke === 'colored') {
    ctx.strokeStyle = color
  }

  if (model === 'elliptic') {
    for (let i = 0; i < settings.p * 2; i++) {
      renderVertices([
        center,
        vertices[i % vertices.length],
        vertices[(i + 1) % vertices.length],
      ])
    }
  } else {
    let polyVertices = []
    if (settings.r === 2 && model === 'hyperbolic') {
      // Optimization
      for (let i = 0; i < settings.p; i++) {
        polyVertices.push(vertices[(i * 2) % vertices.length])
      }
    } else {
      polyVertices = vertices
    }
    renderVertices(polyVertices)
  }

  if (settings.wedges) {
    ctx.globalAlpha = settings.wedgesAlpha / 100
    ctx.fillStyle = settings.wedgesColor
    ctx.strokeStyle = settings.wedgesColor
    for (let i = 0; i < settings.p; i++) {
      renderVertices([
        center,
        vertices[(i * 2 + (order % 2)) % vertices.length],
        vertices[(i * 2 + (order % 2) + 1) % vertices.length],
      ])
    }
    ctx.globalAlpha = 1
  }
}
const renderVertices = vertices => {
  ctx.beginPath()

  const p0 = toDisk(project(vertices[0]))
  ctx.moveTo(p0[0], p0[1])

  for (let j = 0, m = vertices.length; j < m; j++) {
    line(vertices[j], vertices[(j + 1) % vertices.length])
  }

  settings.fill === 'none' || ctx.fill()
  settings.stroke === 'none' || ctx.stroke()
}

const render3dVertices = (vertices, color) => {
  index.push(pos, pos + 1, pos + 2)
  for (let j = 0, m = vertices.length; j < m; j++) {
    const v = vertices[j]
    positions[pos * 3] = v[0]
    positions[pos * 3 + 1] = v[1]
    positions[pos * 3 + 2] = v[2]
    colors[pos * 3] = color.r
    colors[pos * 3 + 1] = color.g
    colors[pos * 3 + 2] = color.b
    pos++
  }
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
    pos = 0
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
  if (polygons.reduce((a, p) => a + p.length, 0) === settings.limit) {
    triangles.pop()
    tokens.pop()
  }

  if (backend === '3d') {
    if (geometry.attributes.position.count) {
      geometry.setIndex(index)
      geometry.attributes.position.needsUpdate = true
      geometry.attributes.color.needsUpdate = true
      geometry.setDrawRange(0, pos)
      geometry.computeVertexNormals()
      geometry.attributes.normal.needsUpdate = true
      geometry.computeBoundingBox()
      geometry.computeBoundingSphere()
    }
    render()
    renderer.render(scene, camera)
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
      tokens.length = 0

      size(true)
    } else {
      if (triangles.length < polygons.length) {
        polygons.pop()
      }
      if (polygons.length > settings.layers) {
        polygons.splice(settings.layers)
        triangles.splice(settings.layers)
        tokens.splice(settings.layers)
        render()
        return
      }
      if (polygons.reduce((a, p) => a + p.length, 0) > settings.limit) {
        while (
          polygons.length &&
          polygons.reduce((a, p) => a + p.length, 0) > settings.limit
        ) {
          polygons.pop()
          triangles.pop()
          tokens.pop()
          render()
        }
      }
    }
    generate(cont)
  } else {
    stop = true
    queueTimeout = setTimeout(() => regenerate(cont), 10)
  }
}

const render = () => {
  showStats.showStats && stats.begin()
  if (backend === '2d') {
    ctx.fillStyle = settings.backgroundColor
    ctx.fillRect(0, 0, width, height)

    if (settings.fill !== 'colored') {
      ctx.fillStyle = settings.fillColor
    }
    if (settings.stroke !== 'colored') {
      ctx.strokeStyle = settings.strokeColor
    }
  }

  // const renderQueue = renderPolygons(polygons[0], 0)
  pos = 0
  if (model === 'elliptic') {
    const pol = []
    for (let o = 0; o < polygons.length; o++) {
      for (let i = 0, l = polygons[o].length; i < l; i++) {
        pol.push(polygons[o][i])
        // /*await asynced(() => */ renderPolygons(polygons[o], o) /*)*/
      }
    }
    pol.sort(
      ['stereographic', 'orthographic', 'inverted'].includes(
        settings.projection
      )
        ? (a, b) => b.center[2] - a.center[2]
        : (a, b) => a.center[2] - b.center[2]
    )
    for (let j = 0, n = pol.length; j < n; j++) {
      renderPolygon(pol[j])
    }
  } else {
    for (let o = 0; o < polygons.length; o++) {
      /*await asynced(() => */ renderPolygons(polygons[o], o) /*)*/
    }
  }

  if (backend === '3d') {
    geometry.attributes.position.needsUpdate = true
    geometry.attributes.color.needsUpdate = true
    geometry.computeVertexNormals()
    geometry.attributes.normal.needsUpdate = true
    geometry.setDrawRange(0, pos)
    renderer.render(scene, camera)
  }

  showStats.showStats && stats.end()
}

const gui = new GUI({
  load: presets,
  preset,
})

gui.remember(settings)

const pqrCheckRegenerate = () => {
  model = getModel(settings)
  if (reverting) {
    return
  }

  if (settings.p !== _pqr.p || settings.q !== _pqr.q || settings.r !== _pqr.r) {
    regenerate()
  }
}

const debounce = (func, wait, immediate) => {
  let timeout
  return function (...args) {
    let later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(this, args)
    }
  }
}

const continueGenerate = () => regenerate(true)

gui
  .add(settings, 'projection', Object.keys(projections).concat(views))
  .onChange(v => {
    if (backend === '2d' && views.includes(v)) {
      backend = '3d'
      canvas.style.display = 'none'
      renderer.domElement.style.display = 'block'
    } else if (backend === '3d' && !views.includes(v)) {
      backend = '2d'
      canvas.style.display = 'block'
      renderer.domElement.style.display = 'none'
    }
    if (v === '3d poincare') {
      camera.fov = 90
      camera.position.set(0, 0, -1)
      controls.target.set(0, 0, 1)
      camera.updateProjectionMatrix()
    } else if (v === '3d klein') {
      camera.fov = 90
      camera.position.set(0, 0, 0)
      controls.target.set(0, 0, 1)
      camera.updateProjectionMatrix()
    } else if (v === '3d inverted') {
      camera.fov = 130
      camera.position.set(0, 0, 2)
      controls.target.set(0, 0, 4)
      camera.updateProjectionMatrix()
    } else if (v === '3d inside') {
      camera.fov = 90
      camera.position.set(0, 0, 0.1)
      controls.target.set(0, 0, 0)
      camera.updateProjectionMatrix()
    }
    size(true)
    render()
  })
gui.add(settings, 'p', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'q', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'r', 2, 20, 1).listen().onChange(pqrCheckRegenerate)
gui.add(settings, 'layers', 1, 100, 1).onChange(debounce(continueGenerate, 150))
gui.add(settings, 'limit', 1).onChange(debounce(continueGenerate, 150))
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
      transformations.length = 0
      regenerate()
    },
  },
  'recenter'
)

gui.add(showStats, '3dControls').onChange(v => (controls.enabled = v))
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
  transformations.length = 0
  reverting = true
  oldRevert()
  reverting = false
  regenerate()
}

interact('canvas')
  .draggable({
    listeners: {
      move: e => {
        if (backend === '3d' && showStats['3dControls']) {
          return
        }
        if (e.ctrlKey) {
          rotate(-e.dx / (2 * radius))
        } else if (e.shiftKey) {
          scale(e.dy / (2 * radius))
        } else {
          translate([-e.dx / w2, -e.dy / h2])
        }
        render()
      },
    },
  })
  .gesturable({
    onmove: e => {
      rotate(-(Math.PI * e.da) / 180)
      scale(e.ds)
      render()
    },
  })

window.ondeviceorientation = window.onresize = size
window.hyperball = {
  polygons,
  tokens,
  translate,
  transformations,
  render,
  geometry,
}

renderer.domElement.id = 'c3d'
canvas.id = 'c2d'
renderer.domElement.style.display = 'none'
document.body.appendChild(renderer.domElement)
document.body.appendChild(canvas)
document.body.appendChild(stats.dom)
stats.showPanel(null)
size()
generate()

renderer.setAnimationLoop(() => {
  if (backend === '3d') {
    renderer.render(scene, camera)
  }
})
