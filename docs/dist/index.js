import Stats from '../_snowpack/pkg/statsjs.js'
import interact from '../_snowpack/pkg/interactjs.js'
import presets from './presets.js'
import { GUI } from '../_snowpack/pkg/dat.gui.js'
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  DynamicDrawUsage,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  LineSegments,
  LineBasicMaterial,
} from '../_snowpack/pkg/three.js'
import { OrbitControls } from '../_snowpack/pkg/three/examples/jsm/controls/OrbitControls.js'
import { projections } from './projections.js'
import {
  setCurvature,
  setTokenPrecision,
  dot,
  getRootTriangle,
  getPolygon,
  rotateVertex,
  translateVertex,
  scaleVertex,
  transformVertex,
  getCurvature,
} from './math.js'

let index = []
let lineIndex = []
let lineWedgesIndex = []
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
  queueTimeout,
  reverting,
  backend,
  stop = false,
  canvas,
  ctx,
  renderer,
  camera,
  controls,
  scene,
  faces,
  wireframe,
  wedgesframe

const getPreset = () =>
  decodeURIComponent(location.hash.replace(/^#/, '')) || presets.preset
const preset = getPreset()
const settings = {
  ...(presets.remembered[preset] || presets.remembered[presets.preset])[0],
}

setTokenPrecision(settings.tokenPrecision)
setCurvature(settings)

const FILL_COLOR_TYPES = ['plain', 'odd', 'colored']
const STROKE_COLOR_TYPES = ['plain', 'colored']

const init2d = () => {
  canvas = document.createElement('canvas')
  ctx = canvas.getContext('2d')
}
const init3d = () => {
  renderer = new WebGLRenderer({
    antialias: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  scene = new Scene()

  camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.001,
    10000
  )
  camera.position.set(0, 0, -1)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 10)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  // const ambientLight = new AmbientLight(0x999999)
  // scene.add(ambientLight)

  // const pointLight = new PointLight(0xffffff, 1)
  // camera.add(pointLight)

  scene.add(camera)
  controls = new OrbitControls(camera, document.body)
  controls.minDistance = 0
  controls.maxDistance = 100

  const positions = new Float32Array(3 * 1000000)
  const colors = new Float32Array(1000000)
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
  )
  geometry.setAttribute(
    'color',
    new BufferAttribute(colors, 3).setUsage(DynamicDrawUsage)
  )

  const lineGeometry = new BufferGeometry()
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
  )
  const lineColors = new Float32Array(1000000)
  lineGeometry.setAttribute(
    'color',
    new BufferAttribute(lineColors, 3).setUsage(DynamicDrawUsage)
  )
  const lineWedgesGeometry = new BufferGeometry()
  lineWedgesGeometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
  )
  const lineWedgesColors = new Float32Array(1000000)
  lineWedgesGeometry.setAttribute(
    'color',
    new BufferAttribute(lineWedgesColors, 3).setUsage(DynamicDrawUsage)
  )
  const material = new MeshBasicMaterial({
    vertexColors: true,
    side: DoubleSide,
  })
  faces = new Mesh(geometry, material)
  const lineMaterial = new LineBasicMaterial({
    vertexColors: true,
  })
  wireframe = new LineSegments(lineGeometry, lineMaterial)
  wireframe.scale.setScalar(0.99)
  const lineWedgesMaterial = new LineBasicMaterial({
    vertexColors: true,
  })
  wedgesframe = new LineSegments(lineWedgesGeometry, lineWedgesMaterial)
  wedgesframe.scale.setScalar(0.995)
  scene.add(wedgesframe)
  scene.add(wireframe)
  scene.add(faces)
}

const updateRadius = () => {
  w2 = width / 2
  h2 = height / 2
  const s2 = Math.min(w2, h2)
  radius =
    {
      poincare: 0.9 * s2,
      klein: 0.9 * s2,
      inverted: 0.4 * s2,
      band: 0.102 * h2,
      half: 0.102 * h2,
      stereographic: 0.9 * s2,
      orthographic: 0.3 * s2,
      joukowsky: 0.8 * w2,
    }[settings.projection] || s2

  if (settings.projection === 'half') {
    h2 = height
  }
}

const size = () => {
  width = window.innerWidth
  height = window.innerHeight

  if (backend === '3d') {
    camera.aspect = width / height
    camera.zoom = Math.min(1, width / height)
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  } else {
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
    }
  }
  updateRadius()
  render()
}

const stats = new Stats()
const showStats = { showStats: false }

const toDisk = ([x, y]) => [w2 + x * radius, h2 - y * radius]

const views = ['3d poincare', '3d klein', '3d inverted', '3d inside']
const project = p => projections[settings.projection](p)

const line = (u, v) => {
  const curvature = getCurvature()
  const curve =
    curvature && settings.projection !== 'klein' && !settings.straight
  const pu = toDisk(project(u))
  const pv = toDisk(project(v))
  const realDist =
    curve && Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
  if (curve && realDist > 20 - settings.curvePrecision) {
    const uv = dot(u, v)
    const t2s = t => Math.sqrt(t * t * (uv * uv - 1) + 1) - curvature * uv * t
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

const renderPolygon = ({ vertices, center, order, parity }) => {
  if (vertices.length < 2) {
    return
  }
  if (backend === '3d') {
    let wedgesFillColor, wedgesStrokeColor
    const fillColor = new Color()
    if (settings.fill === 'colored') {
      fillColor.setHSL(
        ((order * settings.fillColorShift) % 360) / 360,
        0.5,
        0.6
      )
    } else if (settings.fill === 'odd') {
      fillColor.set(
        order % 2 === 0 ? settings.fillColor : settings.fillColorEven
      )
    } else if (settings.fill === 'plain') {
      fillColor.set(settings.fillColor)
    }
    const strokeColor = new Color()
    if (settings.stroke === 'colored') {
      strokeColor.setHSL(
        ((order * settings.strokeColorShift) % 360) / 360,
        0.5,
        0.6
      )
    } else if (settings.stroke === 'plain') {
      strokeColor.set(settings.strokeColor)
    }

    if (settings.wedges) {
      wedgesFillColor = new Color()
      wedgesFillColor.lerpColors(
        fillColor,
        new Color(settings.wedgesFillColor),
        settings.wedgesFillAlpha / 100
      )
      wedgesStrokeColor = new Color()
      wedgesStrokeColor.lerpColors(
        fillColor,
        new Color(settings.wedgesStrokeColor),
        settings.wedgesStrokeAlpha / 100
      )
    }

    const firstPos = pos + 1
    if (wireframe.visible) {
      lineIndex.push(firstPos)
    }
    for (let i = 0; i < settings.p * 2; i++) {
      render3dVertices(
        center,
        vertices[i % vertices.length],
        vertices[(i + 1) % vertices.length],
        settings.wedges && parity === i % 2 ? wedgesFillColor : fillColor,
        strokeColor,
        wedgesStrokeColor
      )
    }
    if (wireframe.visible) {
      lineIndex.push(firstPos)
    }
    return
  }
  if (settings.fill === 'colored') {
    ctx.fillStyle = `hsl(${order * settings.fillColorShift}deg, 50%, 60%)`
  } else if (settings.fill === 'odd') {
    ctx.fillStyle =
      order % 2 === 0 ? settings.fillColor : settings.fillColorEven
  }
  if (settings.stroke === 'colored') {
    ctx.strokeStyle = `hsl(${order * settings.strokeColorShift}deg, 50%, 60%)`
  }

  const curvature = getCurvature()
  if (curvature > 0) {
    for (let i = 0; i < settings.p * 2; i++) {
      renderVertices([
        center,
        vertices[i % vertices.length],
        vertices[(i + 1) % vertices.length],
      ])
    }
  } else {
    let polyVertices = []
    if (settings.r === 2 && curvature < 0) {
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
    ctx.save()
    for (let i = 0; i < settings.p; i++) {
      renderVertices(
        [
          center,
          vertices[(i * 2 + parity) % vertices.length],
          vertices[(i * 2 + parity + 1) % vertices.length],
        ],
        true
      )
    }
    ctx.restore()
  }
}
const renderVertices = (vertices, isWedge) => {
  ctx.beginPath()

  const p0 = toDisk(project(vertices[0]))
  ctx.moveTo(p0[0], p0[1])

  for (let j = 0, m = vertices.length; j < m; j++) {
    line(vertices[j], vertices[(j + 1) % vertices.length])
  }
  if (isWedge) {
    if (settings.wedgesFillAlpha) {
      ctx.globalAlpha = settings.wedgesFillAlpha / 100
      ctx.fillStyle = settings.wedgesFillColor
      ctx.fill()
    }
    if (settings.wedgesStrokeAlpha) {
      ctx.lineWidth = settings.wedgesStrokeWidth
      ctx.strokeStyle = settings.wedgesStrokeColor
      ctx.globalAlpha = settings.wedgesStrokeAlpha / 100
      ctx.stroke()
    }
  } else {
    if (settings.fillAlpha) {
      ctx.globalAlpha = settings.fillAlpha / 100
      ctx.fill()
    }
    if (settings.strokeAlpha) {
      ctx.globalAlpha = settings.strokeAlpha / 100
      ctx.stroke()
    }
  }
}

const render3dVertices = (
  center,
  u,
  v,
  fillColor,
  strokeColor,
  wedgesStrokeColor
) => {
  const positions = faces.geometry.attributes.position.array
  const colors = faces.geometry.attributes.color.array
  const lineColors = wireframe.geometry.attributes.color.array
  const lineWedgesColors = wedgesframe.geometry.attributes.color.array
  const curvature = getCurvature()
  const inVertices = []
  const curve =
    curvature && settings.projection !== 'klein' && !settings.straight
  if (curve) {
    const uv = dot(u, v)
    const t2s = t => Math.sqrt(t * t * (uv * uv - 1) + 1) - curvature * uv * t
    let curveStep = Math.max(0.01, (20 - settings.curvePrecision) / 50)
    for (let t = 1 - curveStep; t > 0; t -= curveStep) {
      const s = t2s(t)
      const T = [
        //
        u[0] * t + v[0] * s,
        u[1] * t + v[1] * s,
        u[2] * t + v[2] * s,
      ]
      inVertices.push(T)
    }
  }

  const centerPos = pos
  positions[pos * 3] = center[0]
  positions[pos * 3 + 1] = center[1]
  positions[pos * 3 + 2] = center[2]

  if (faces.visible) {
    colors[pos * 3] = fillColor.r
    colors[pos * 3 + 1] = fillColor.g
    colors[pos * 3 + 2] = fillColor.b
  }

  if (wireframe.visible) {
    lineColors[pos * 3] = strokeColor.r
    lineColors[pos * 3 + 1] = strokeColor.g
    lineColors[pos * 3 + 2] = strokeColor.b
  }

  if (wedgesframe.visible) {
    lineWedgesColors[pos * 3] = wedgesStrokeColor.r
    lineWedgesColors[pos * 3 + 1] = wedgesStrokeColor.g
    lineWedgesColors[pos * 3 + 2] = wedgesStrokeColor.b
    lineWedgesIndex.push(pos)
  }

  pos++

  positions[pos * 3] = u[0]
  positions[pos * 3 + 1] = u[1]
  positions[pos * 3 + 2] = u[2]

  if (faces.visible) {
    colors[pos * 3] = fillColor.r
    colors[pos * 3 + 1] = fillColor.g
    colors[pos * 3 + 2] = fillColor.b
  }

  if (wireframe.visible) {
    lineColors[pos * 3] = strokeColor.r
    lineColors[pos * 3 + 1] = strokeColor.g
    lineColors[pos * 3 + 2] = strokeColor.b
    lineIndex.push(pos)
    lineIndex.push(pos)
  }

  if (wedgesframe.visible) {
    lineWedgesColors[pos * 3] = wedgesStrokeColor.r
    lineWedgesColors[pos * 3 + 1] = wedgesStrokeColor.g
    lineWedgesColors[pos * 3 + 2] = wedgesStrokeColor.b
    lineWedgesIndex.push(pos)
    lineWedgesIndex.push(pos)
  }

  pos++

  for (let j = 0, m = inVertices.length; j < m; j++) {
    const p = inVertices[j]
    positions[pos * 3] = p[0]
    positions[pos * 3 + 1] = p[1]
    positions[pos * 3 + 2] = p[2]

    if (faces.visible) {
      index.push(centerPos, pos - 1, pos)
      colors[pos * 3] = fillColor.r
      colors[pos * 3 + 1] = fillColor.g
      colors[pos * 3 + 2] = fillColor.b
    }

    if (wireframe.visible) {
      lineColors[pos * 3] = strokeColor.r
      lineColors[pos * 3 + 1] = strokeColor.g
      lineColors[pos * 3 + 2] = strokeColor.b
      lineIndex.push(pos)
      lineIndex.push(pos)
    }

    if (wedgesframe.visible) {
      lineWedgesColors[pos * 3] = wedgesStrokeColor.r
      lineWedgesColors[pos * 3 + 1] = wedgesStrokeColor.g
      lineWedgesColors[pos * 3 + 2] = wedgesStrokeColor.b
      lineWedgesIndex.push(pos)
      lineWedgesIndex.push(pos)
    }
    pos++
  }

  positions[pos * 3] = v[0]
  positions[pos * 3 + 1] = v[1]
  positions[pos * 3 + 2] = v[2]

  if (faces.visible) {
    index.push(centerPos, pos - 1, pos)
    colors[pos * 3] = fillColor.r
    colors[pos * 3 + 1] = fillColor.g
    colors[pos * 3 + 2] = fillColor.b
  }

  if (wireframe.visible) {
    lineColors[pos * 3] = strokeColor.r
    lineColors[pos * 3 + 1] = strokeColor.g
    lineColors[pos * 3 + 2] = strokeColor.b
    lineIndex.push(pos)
    lineIndex.push(pos)
  }

  if (wedgesframe.visible) {
    lineWedgesColors[pos * 3] = wedgesStrokeColor.r
    lineWedgesColors[pos * 3 + 1] = wedgesStrokeColor.g
    lineWedgesColors[pos * 3 + 2] = wedgesStrokeColor.b
    lineWedgesIndex.push(pos)
    lineWedgesIndex.push(pos)
    lineWedgesIndex.push(centerPos)
  }
  pos++
}

const createPolygon = (triangle, order) => {
  if (stop || polygons.reduce((a, p) => a + p.length, 0) >= settings.limit) {
    return
  }
  const polygon = getPolygon(
    triangle,
    settings.p,
    order,
    polygons,
    triangles,
    tokens
  )

  if (!polygon) {
    return
  }

  for (let t = 0; t < transformations.length; t++) {
    const { type, parameter } = transformations[t]

    transformVertex(type, polygon.center, parameter)
    for (let v = 0; v < polygon.vertices.length; v++) {
      transformVertex(type, polygon.vertices[v], parameter)
    }
  }
  renderPolygon(polygon)
}

const asynced = (f, timeout = 1) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(f())
    }, timeout)
  )

const nextLayer = () => {
  const order = polygons.length
  const lastTriangles = triangles[order - 1]
  return Promise.all(
    lastTriangles.map(triangle => asynced(() => createPolygon(triangle, order)))
  )
}

const generate = async cont => {
  if (generating) {
    return
  }

  generating = true

  if (!cont) {
    index = []
    lineIndex = []
    lineWedgesIndex = []
    pos = 0
    polygons.p = settings.p
    polygons.q = settings.q
    polygons.r = settings.r
    if (backend === '3d') {
      faces.geometry.setDrawRange(0, 0)
      wireframe.geometry.setDrawRange(0, 0)
      wedgesframe.geometry.setDrawRange(0, 0)
    }
    clear()
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
    polygons.reduce((a, p) => a + p.length, 0) < settings.limit &&
    (polygons.length === 0 || polygons[polygons.length - 1].length)
  ) {
    if (stop) {
      break
    }
    if (polygons.length === 0) {
      const root = getRootTriangle(settings)
      root.parity = 0
      createPolygon(root, 0)
    } else {
      await asynced(() => nextLayer())
    }
    if (backend === '3d') {
      if (faces.visible) {
        faces.geometry.setIndex(index)
        faces.geometry.setDrawRange(0, index.length)
        faces.geometry.attributes.position.needsUpdate = true
        faces.geometry.attributes.color.needsUpdate = true
      }
      if (wireframe.visible) {
        wireframe.geometry.setIndex(lineIndex)
        wireframe.geometry.setDrawRange(0, lineIndex.length)
        wireframe.geometry.attributes.position.needsUpdate = true
        wireframe.geometry.attributes.color.needsUpdate = true
      }
      if (wedgesframe.visible) {
        wedgesframe.geometry.setIndex(lineWedgesIndex)
        wedgesframe.geometry.setDrawRange(0, lineWedgesIndex.length)
        wedgesframe.geometry.attributes.position.needsUpdate = true
        wedgesframe.geometry.attributes.color.needsUpdate = true
      }
      renderer.render(scene, camera)
    }
  }
  if (polygons.reduce((a, p) => a + p.length, 0) === settings.limit) {
    triangles.pop()
    tokens.pop()
  }

  render()
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

const clear = () => {
  if (backend === '2d') {
    ctx.globalAlpha = 1
    ctx.fillStyle = settings.backgroundColor
    ctx.fillRect(0, 0, width, height)

    if (settings.fill !== 'colored') {
      ctx.fillStyle = settings.fillColor
    }
    if (settings.stroke !== 'colored') {
      ctx.strokeStyle = settings.strokeColor
    }
    ctx.lineWidth = settings.strokeWidth
  }
  if (backend === '3d') {
    scene.background = new Color(settings.backgroundColor)
    faces.material.transparent = settings.fillAlpha !== 100
    faces.material.opacity = settings.fillAlpha / 100
    faces.visible = settings.fillAlpha

    wireframe.material.transparent = settings.strokeAlpha !== 100
    wireframe.material.opacity = settings.strokeAlpha / 100
    wireframe.material.linewidth = settings.strokeWidth
    wireframe.visible = settings.strokeAlpha

    wedgesframe.material.transparent = settings.wedgesStrokeAlpha !== 100
    wedgesframe.material.opacity = settings.wedgesStrokeAlpha / 100
    wedgesframe.material.linewidth = settings.wedgesStrokeWidth
    wedgesframe.visible = settings.wedges && settings.wedgesStrokeAlpha

    faces.geometry.setDrawRange(0, 0)
    wireframe.geometry.setDrawRange(0, 0)
    wedgesframe.geometry.setDrawRange(0, 0)
  }
}

const render = () => {
  if (reverting) {
    return
  }
  showStats.showStats && stats.begin()
  clear()

  pos = 0
  index = []
  lineIndex = []
  lineWedgesIndex = []
  if (getCurvature() > 0) {
    const pol = []
    for (let o = 0; o < polygons.length; o++) {
      for (let i = 0, l = polygons[o].length; i < l; i++) {
        pol.push(polygons[o][i])
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
      for (let i = 0, l = polygons[o].length; i < l; i++) {
        renderPolygon(polygons[o][i])
      }
    }
  }

  if (backend === '3d') {
    if (lineIndex.length !== wireframe.geometry.drawRange.count) {
      wireframe.geometry.setIndex(lineIndex)
    }
    if (lineWedgesIndex.length !== wedgesframe.geometry.drawRange.count) {
      wedgesframe.geometry.setIndex(lineWedgesIndex)
    }
    if (faces.visible) {
      faces.geometry.setDrawRange(0, index.length)
      faces.geometry.attributes.position.needsUpdate = true
      faces.geometry.attributes.color.needsUpdate = true
    }
    if (wireframe.visible) {
      wireframe.geometry.setDrawRange(0, lineIndex.length)
      wireframe.geometry.attributes.position.needsUpdate = true
      wireframe.geometry.attributes.color.needsUpdate = true
    }
    if (wedgesframe.visible) {
      wedgesframe.geometry.setDrawRange(0, lineWedgesIndex.length)
      wedgesframe.geometry.attributes.position.needsUpdate = true
      wedgesframe.geometry.attributes.color.needsUpdate = true
    }

    renderer.render(scene, camera)
    console.log(pos)
  }

  showStats.showStats && stats.end()
}

const translate = offset => {
  transformations.push({ type: 'translate', parameter: offset })

  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      translateVertex(center, offset)
      for (let j = 0; j < vertices.length; j++) {
        translateVertex(vertices[j], offset)
      }
    }
  }
}

const rotate = theta => {
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      rotateVertex(center, theta)
      for (let j = 0; j < vertices.length; j++) {
        rotateVertex(vertices[j], theta)
      }
    }
  }
}

const scale = factor => {
  transformations.push({ type: 'scale', parameter: factor })

  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center } = orderPolygons[i]
      scaleVertex(center, factor)
      for (let j = 0; j < vertices.length; j++) {
        scaleVertex(vertices[j], factor)
      }
    }
  }
}

const gui = new GUI({
  load: presets,
  preset,
})

gui.remember(settings)

const pqrCheckRegenerate = () => {
  setCurvature(settings)

  if (reverting) {
    return
  }

  if (
    settings.p !== polygons.p ||
    settings.q !== polygons.q ||
    settings.r !== polygons.r
  ) {
    regenerate()
  }
}

const debounce = (func, wait, immediate) => {
  let timeout
  return function (...args) {
    if (reverting) {
      return
    }
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
    let regen = false
    if (backend !== '3d' && views.includes(v)) {
      backend = '3d'
      canvas.style.display = 'none'
      renderer.domElement.style.display = 'block'
      regen = true
    } else if (backend !== '2d' && !views.includes(v)) {
      backend = '2d'
      canvas.style.display = 'block'
      renderer.domElement.style.display = 'none'
    }
    if (v === '3d poincare') {
      camera.fov = 90
      camera.position.set(0, 0, -1)
      controls.target.set(0, 0, 1)
      camera.updateProjectionMatrix()
      controls.update()
    } else if (v === '3d klein') {
      camera.fov = 90
      camera.position.set(0, 0, 0)
      controls.target.set(0, 0, 1)
      camera.updateProjectionMatrix()
      controls.update()
    } else if (v === '3d inverted') {
      camera.fov = 130
      camera.position.set(0, 0, 2)
      controls.target.set(0, 0, 4)
      camera.updateProjectionMatrix()
      controls.update()
    } else if (v === '3d inside') {
      camera.fov = 90
      camera.position.set(0, 0, 0.1)
      controls.target.set(0, 0, 0)
      camera.updateProjectionMatrix()
      controls.update()
    }
    updateRadius()
    if (!reverting) {
      regen && regenerate()
    }
    size()
  })
gui.add(settings, 'p', 2, 20, 1).onChange(pqrCheckRegenerate)
gui.add(settings, 'q', 2, 20, 1).onChange(pqrCheckRegenerate)
gui.add(settings, 'r', 2, 20, 1).onChange(pqrCheckRegenerate)
gui.add(settings, 'layers', 1, 100, 1).onChange(debounce(continueGenerate, 150))
gui.add(settings, 'limit', 1).onChange(debounce(continueGenerate, 150))

const fillGui = gui.addFolder('Fill Style')
fillGui.add(settings, 'fill', FILL_COLOR_TYPES).onChange(render)
fillGui.addColor(settings, 'fillColor').onChange(render)
fillGui.addColor(settings, 'fillColorEven').onChange(render)
fillGui
  .add(settings, 'fillColorShift', -359, 359, 1)
  .onChange(() => regenerate())
fillGui.add(settings, 'fillAlpha', 0, 100, 1).onChange(render)

const strokeGui = gui.addFolder('Stroke Style')
strokeGui.add(settings, 'stroke', STROKE_COLOR_TYPES).onChange(render)
strokeGui.addColor(settings, 'strokeColor').onChange(render)
strokeGui
  .add(settings, 'strokeColorShift', -359, 359, 1)
  .onChange(() => regenerate())
strokeGui.add(settings, 'strokeAlpha', 0, 100, 1).onChange(render)
strokeGui.add(settings, 'strokeWidth', 0.1, 10, 0.1).onChange(render)
strokeGui.addColor(settings, 'backgroundColor').onChange(render)
strokeGui.add(settings, 'straight').onChange(render)

const wedgesGui = gui.addFolder('Wedges Style')
wedgesGui.add(settings, 'wedges').onChange(render)
wedgesGui.addColor(settings, 'wedgesFillColor').onChange(render)
wedgesGui.add(settings, 'wedgesFillAlpha', 0, 100, 1).onChange(render)
wedgesGui.addColor(settings, 'wedgesStrokeColor').onChange(render)
wedgesGui.add(settings, 'wedgesStrokeAlpha', 0, 100, 1).onChange(render)
wedgesGui.add(settings, 'wedgesStrokeWidth', 0.1, 10, 0.1).onChange(render)

gui.add(settings, 'tokenPrecision', 0, 16, 1).onChange(v => {
  setTokenPrecision(v)
  regenerate()
})
gui.add(settings, 'curvePrecision', 0, 20, 1).onChange(() => regenerate())
gui.add(
  {
    recenter: () => {
      stop = true
      transformations.length = 0
      controls.reset()
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
  transformations.length = 0
  reverting = true
  oldRevert()
  reverting = false
  regenerate()
}

init2d()
init3d()

gui.revert()

interact(document.body)
  .draggable({
    listeners: {
      move: e => {
        const withAlt3D = backend !== '3d' || e.altKey
        if ((e.ctrlKey || e.shiftKey) && withAlt3D) {
          rotate(-e.dx / (2 * radius))
          scale(-e.dy / (2 * radius))
        } else if (withAlt3D) {
          translate([-e.dx / w2, -e.dy / h2])
        } else {
          return
        }
        controls.enabled = false
        render()
      },
      end: () => {
        controls.enabled = true
      },
    },
  })
  .gesturable({
    onmove: e => {
      rotate(-(Math.PI * e.da) / 180)
      scale(-e.ds)
      render()
    },
  })

window.ondeviceorientation = window.onresize = size
window.hyperball = {
  polygons,
  tokens,
  translate,
  transformations,
  generate,
  regenerate,
  settings,
  render,
  faces,
  wireframe,
  wedgesframe,
  scene,
  camera,
  controls,
}

renderer.domElement.id = 'c3d'
canvas.id = 'c2d'
document.body.appendChild(renderer.domElement)
document.body.appendChild(canvas)
document.body.appendChild(stats.dom)
stats.showPanel(null)

renderer.setAnimationLoop(() => {
  if (backend === '3d') {
    renderer.render(scene, camera)
  }
})
