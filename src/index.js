import Stats from 'stats.js'
import interact from 'interactjs'
import presets from './presets'
import { GUI } from 'dat.gui'
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
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { projections, poincare } from './projections'
import {
  setCurvature,
  setTokenPrecision,
  getRootTriangle,
  getPolygon,
  rotateVertex,
  translateVertex,
  scaleVertex,
  transformVertex,
  getCurvature,
  intersect,
  curve,
  perps,
  vec,
  incenter,
  dot,
  bisectorOpposites,
  inTriangle,
  intersectTriangleByincenter,
  normalize,
  near,
  dist,
} from './math'

let index = []
let lineIndex = []
let lineWythoffIndex = []
let pos = 0
let linePos = 0
let lineWythoffPos = 0

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
  rootCanvas,
  rootCtx,
  ctx,
  renderer,
  camera,
  controls,
  scene,
  faces,
  wireframe,
  wythoffframe,
  rootSize = 200,
  rootRatio,
  rootMargin = 10,
  interestingPoints = [],
  validDraws = []

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
  rootCanvas = document.createElement('canvas')
  rootCtx = rootCanvas.getContext('2d')
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
    0.01,
    1000
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
  controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 0
  controls.maxDistance = 100

  const MAX = 1000000

  const positions = new Float32Array(3 * MAX)
  const colors = new Float32Array(3 * MAX)
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
  const linePositions = new Float32Array(3 * MAX)
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(linePositions, 3).setUsage(DynamicDrawUsage)
  )
  const lineColors = new Float32Array(3 * MAX)
  lineGeometry.setAttribute(
    'color',
    new BufferAttribute(lineColors, 3).setUsage(DynamicDrawUsage)
  )
  const lineWythoffGeometry = new BufferGeometry()
  const lineWythoffPositions = new Float32Array(3 * MAX)
  lineWythoffGeometry.setAttribute(
    'position',
    new BufferAttribute(lineWythoffPositions, 3).setUsage(DynamicDrawUsage)
  )
  const lineWythoffColors = new Float32Array(3 * MAX)
  lineWythoffGeometry.setAttribute(
    'color',
    new BufferAttribute(lineWythoffColors, 3).setUsage(DynamicDrawUsage)
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
  wireframe.scale.setScalar(0.999)
  const lineWythoffMaterial = new LineBasicMaterial({
    vertexColors: true,
  })
  wythoffframe = new LineSegments(lineWythoffGeometry, lineWythoffMaterial)
  wythoffframe.scale.setScalar(0.999)
  scene.add(wythoffframe)
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
// const clampW = w => Math.max(Math.min(w, width), 0)
// const clampH = h => Math.max(Math.min(h, height), 0)
// const toDiskClamped = ([x, y]) => [clampW(w2 + x * radius), clampH(h2 - y * radius)]

const toDisk = ([x, y]) => [w2 + x * radius, h2 - y * radius]

const views = [
  '3d poincare',
  '3d klein',
  '3d inverted',
  '3d stereographic',
  '3d orthographic',
]
const project = p => projections[settings.projection](p)
const black = new Color('black')
const renderPolygon = ({ vertices, center, wythoffs, order, parity }) => {
  if (vertices.length < 2) {
    return
  }
  let fillColor = null,
    wedgesFillColor = null,
    strokeColor = null,
    wythoffColor = null

  if (settings.fillAlpha) {
    fillColor = [
      new Color(settings.fillColorP),
      new Color(settings.fillColorQ),
      new Color(settings.fillColorR),
    ]
    if (settings.fill === 'colored') {
      fillColor[0].offsetHSL((order * settings.fillColorShift) / 360, 0, 0)
      fillColor[1].offsetHSL((order * settings.fillColorShift) / 360, 0, 0)
      fillColor[2].offsetHSL((order * settings.fillColorShift) / 360, 0, 0)
    } else if (settings.fill === 'odd') {
      if (order % 2) {
        fillColor[0].offsetHSL(1 / 2, 0, 0)
        fillColor[1].offsetHSL(1 / 2, 0, 0)
        fillColor[2].offsetHSL(1 / 2, 0, 0)
      }
    }
    if (settings.wedgeShade) {
      wedgesFillColor = [
        new Color().lerpColors(fillColor[0], black, settings.wedgeShade / 100),
        new Color().lerpColors(fillColor[1], black, settings.wedgeShade / 100),
        new Color().lerpColors(fillColor[2], black, settings.wedgeShade / 100),
      ]
    } else {
      wedgesFillColor = fillColor
    }
  }

  if (settings.strokeAlpha) {
    strokeColor = new Color(settings.strokeColor)
    if (settings.stroke === 'colored') {
      strokeColor.offsetHSL((order * settings.strokeColorShift) / 360, 0, 0)
    }
  }

  if (settings.strokeWythoffAlpha) {
    wythoffColor = new Color(settings.strokeWythoffColor)
    if (settings.strokeWythoff === 'colored') {
      wythoffColor.offsetHSL(
        (order * settings.strokeWythoffColorShift) / 360,
        0,
        0
      )
    }
  }

  if (backend === '3d') {
    for (let i = 0; i < vertices.length - 1; i++) {
      const wythoff = wythoffs[i]

      for (let j = 0; j < 3; j++) {
        const vert =
          i % 2
            ? [center, vertices[i], vertices[1 + i]]
            : [center, vertices[i + 1], vertices[i]]

        const w1 = 1 + j
        const w2 = 1 + ((j + 1) % 3)
        const verts = [wythoff[0]]
        validDraws[j][0] && verts.push(wythoff[w1])
        validDraws[j][1] && verts.push(vert[j])
        validDraws[j][2] && verts.push(wythoff[w2])
        validDraws[j][3] && verts.push(wythoff[0])

        render3dVertices(
          verts,
          j,
          fillColor && (parity === i % 2 ? wedgesFillColor : fillColor)[j],
          strokeColor,
          wythoffColor,
          validDraws[j]
        )
      }
    }
    return
  }

  if (!settings.wedgeShade && validDraws.fills === 1) {
    let verts = []
    for (let i = 0; i < ~~(vertices.length / 2); i++) {
      verts.push(vertices[1 + ((i * 2) % vertices.length)])
    }
    const j = validDraws.findIndex(v => v.fillValid)
    renderVertices(
      verts,
      fillColor && fillColor[j].getStyle(),
      strokeColor && strokeColor.getStyle(),
      settings.strokeAlpha,
      settings.strokeWidth
    )
    return
  }

  for (let i = 0; i < vertices.length - 1; i++) {
    const wythoff = wythoffs[i]
    const vert =
      i % 2
        ? [center, vertices[i], vertices[1 + i]]
        : [center, vertices[1 + i], vertices[i]]

    if (fillColor) {
      for (let j = 0; j < 3; j++) {
        if (!validDraws[j].fillValid) {
          continue
        }

        const w1 = 1 + j
        const w2 = 1 + ((j + 1) % 3)
        const verts = [wythoff[0]]
        validDraws[j][0] && verts.push(wythoff[w1])
        validDraws[j][1] && verts.push(vert[j])
        validDraws[j][2] && verts.push(wythoff[w2])
        validDraws[j][3] && verts.push(wythoff[0])
        renderVertices(
          verts,
          fillColor &&
            (parity === i % 2 ? wedgesFillColor : fillColor)[j].getStyle()
        )
      }
    }
    if (wythoffColor) {
      for (let j = 0; j < 3; j++) {
        if (!validDraws[j][0]) {
          continue
        }
        renderVertices(
          [wythoff[0], wythoff[1 + j]],
          null,
          wythoffColor && wythoffColor.getStyle(),
          settings.strokeWythoffAlpha,
          settings.strokeWythoffWidth
        )
      }
    }
    if (strokeColor) {
      renderVertices(
        vert.slice(1, 3),
        null,
        strokeColor && strokeColor.getStyle(),
        settings.strokeAlpha,
        settings.strokeWidth
      )
    }
  }
}

const renderVertices = (
  vertices,
  fillColor,
  strokeColor,
  strokeAlpha,
  strokeWidth
) => {
  const verts = []
  const curvature = getCurvature()
  const straight = settings.straight
  for (let i = 0, m = vertices.length; i < m; i++) {
    const u = vertices[i]
    const pu = toDisk(project(u))
    const v = vertices[(i + 1) % m]
    const pv = toDisk(project(v))
    verts.push([pu[0], pu[1], u])
    if (!straight) {
      const realDist = Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
      const curvedVertices = curve(
        u,
        v,
        Math.max(0.01, (20 - settings.curvePrecision) / realDist)
      )

      for (let j = 1, n = curvedVertices.length; j < n; j++) {
        const vt = curvedVertices[j]
        const p = toDisk(project(vt))
        verts.push([p[0], p[1], vt])
        if (
          settings.projection === 'orthographic' &&
          (p[0] > width || p[0] < 0 || p[1] > height || p[1] < 0)
        ) {
          break
        }
      }
    }
    verts.push([pv[0], pv[1], v])
  }

  if (fillColor) {
    ctx.beginPath()
    ctx.globalAlpha = settings.fillAlpha / 100
    ctx.fillStyle = fillColor
    for (let i = 0, n = verts.length; i < n; i++) {
      ctx.lineTo(verts[i][0], verts[i][1])
    }
    ctx.fill()
  }
  if (strokeColor) {
    ctx.globalAlpha = strokeAlpha / 100
    ctx.strokeStyle = strokeColor
    if (curvature < 0 && settings.strokeScaled) {
      for (let i = 1, n = verts.length; i < n; i++) {
        ctx.lineWidth =
          (2 * strokeWidth) / (dist(verts[i - 1][2]) + dist(verts[i][2]))
        if (ctx.lineWidth < 0.01) {
          break
        }
        ctx.beginPath()
        ctx.moveTo(verts[i - 1][0], verts[i - 1][1])
        ctx.lineTo(verts[i][0], verts[i][1])
        ctx.stroke()
      }
    } else {
      ctx.beginPath()
      ctx.lineWidth = strokeWidth
      for (let i = 0, n = verts.length; i < n; i++) {
        ctx.lineTo(verts[i][0], verts[i][1])
      }
      ctx.stroke()
    }
  }
}

const render3dVertices = (
  vertices,
  j,
  fillColor,
  strokeColor,
  wedgesStrokeColor,
  validDraws
) => {
  const curvature = getCurvature()
  const positions = faces.geometry.attributes.position.array
  const colors = faces.geometry.attributes.color.array
  const linePositions = wireframe.geometry.attributes.position.array
  const lineColors = wireframe.geometry.attributes.color.array
  const lineWythoffPositions = wythoffframe.geometry.attributes.position.array
  const lineWythoffColors = wythoffframe.geometry.attributes.color.array
  const curved = settings.projection !== 'klein' && !settings.straight
  const precision = Math.max(0.01, (20 - settings.curvePrecision) / 50)
  const verticesGroups = []
  for (let i = 1, n = vertices.length; i < n; i++) {
    verticesGroups.push(
      curved
        ? curve(vertices[i - 1], vertices[i], precision)
        : [vertices[i - 1], vertices[i]]
    )
  }
  const centerPos = pos

  if (faces.visible && validDraws.fillValid) {
    let center = [0, 0, 0]
    for (let i = 0, n = vertices.length; i < n; i++) {
      center[0] += vertices[i][0]
      center[1] += vertices[i][1]
      center[2] += vertices[i][2]
    }
    center[0] /= vertices.length
    center[1] /= vertices.length
    center[2] /= vertices.length
    if (curvature) {
      center = normalize(center)
    }

    positions[pos * 3] = center[0]
    positions[pos * 3 + 1] = center[1]
    positions[pos * 3 + 2] = center[2]
    colors[pos * 3] = fillColor.r
    colors[pos * 3 + 1] = fillColor.g
    colors[pos * 3 + 2] = fillColor.b
    pos++
  }

  const firstPos = pos
  const lineFirstPos = linePos
  const lineWythoffFirstPos = lineWythoffPos
  for (let i = 0, m = verticesGroups.length; i < m; i++) {
    const group = verticesGroups[i]

    for (let k = 0, n = group.length; k < n; k++) {
      const vertex = group[k]

      if (faces.visible && validDraws.fillValid) {
        pos > firstPos && index.push(centerPos, pos - 1, pos)
        positions[pos * 3] = vertex[0]
        positions[pos * 3 + 1] = vertex[1]
        positions[pos * 3 + 2] = vertex[2]
        colors[pos * 3] = fillColor.r
        colors[pos * 3 + 1] = fillColor.g
        colors[pos * 3 + 2] = fillColor.b
        pos++
      }

      if (
        wireframe.visible &&
        ((j === 1 &&
          validDraws[2] &&
          i === 2 - !validDraws[0] - !validDraws[1]) ||
          (j === 2 && validDraws[1] && i === 1 - !validDraws[0]))
      ) {
        linePositions[linePos * 3] = vertex[0]
        linePositions[linePos * 3 + 1] = vertex[1]
        linePositions[linePos * 3 + 2] = vertex[2]
        lineColors[linePos * 3] = strokeColor.r
        lineColors[linePos * 3 + 1] = strokeColor.g
        lineColors[linePos * 3 + 2] = strokeColor.b
        linePos > lineFirstPos && lineIndex.push(linePos - 1, linePos)
        linePos++
      }

      if (wythoffframe.visible && validDraws[0] && i === 0) {
        lineWythoffPositions[lineWythoffPos * 3] = vertex[0]
        lineWythoffPositions[lineWythoffPos * 3 + 1] = vertex[1]
        lineWythoffPositions[lineWythoffPos * 3 + 2] = vertex[2]
        lineWythoffColors[lineWythoffPos * 3] = wedgesStrokeColor.r
        lineWythoffColors[lineWythoffPos * 3 + 1] = wedgesStrokeColor.g
        lineWythoffColors[lineWythoffPos * 3 + 2] = wedgesStrokeColor.b
        lineWythoffPos > lineWythoffFirstPos &&
          lineWythoffIndex.push(lineWythoffPos - 1, lineWythoffPos)
        lineWythoffPos++
      }
    }
  }
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
    // renderVertices
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

    for (let j = 0; j < polygon.wythoffs.length; j++) {
      for (let l = 0; l < polygon.wythoffs[j].length; l++) {
        transformVertex(type, polygon.wythoffs[j][l], parameter)
      }
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
const getWythoffTriangle = ({ p, q, r, wp, wq, wr }) => {
  const curvature = getCurvature()
  const root = getRootTriangle({ p, q, r })
  root.parity = 1
  wp *= -1
  wq *= -1
  if (curvature > 0) {
    wr *= -1
  }
  root.push(...perps([wp, wq, wr], root))
  return root
}

const generate = async cont => {
  if (generating) {
    return
  }

  generating = true

  if (!cont) {
    index = []
    lineIndex = []
    lineWythoffIndex = []
    pos = 0
    linePos = 0
    lineWythoffPos = 0

    polygons.p = settings.p
    polygons.q = settings.q
    polygons.r = settings.r
    polygons.wp = settings.wp
    polygons.wq = settings.wq
    polygons.wr = settings.wr
    if (backend === '3d') {
      faces.geometry.setDrawRange(0, 0)
      wireframe.geometry.setDrawRange(0, 0)
      wythoffframe.geometry.setDrawRange(0, 0)
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
      const root = getWythoffTriangle(settings)
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
        faces.geometry.computeBoundingSphere()
      }
      if (wireframe.visible) {
        wireframe.geometry.setIndex(lineIndex)
        wireframe.geometry.setDrawRange(0, lineIndex.length)
        wireframe.geometry.attributes.position.needsUpdate = true
        wireframe.geometry.attributes.color.needsUpdate = true
        wireframe.geometry.computeBoundingSphere()
      }
      if (wythoffframe.visible) {
        wythoffframe.geometry.setIndex(lineWythoffIndex)
        wythoffframe.geometry.setDrawRange(0, lineWythoffIndex.length)
        wythoffframe.geometry.attributes.position.needsUpdate = true
        wythoffframe.geometry.attributes.color.needsUpdate = true
        wythoffframe.geometry.computeBoundingSphere()
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
  renderRootTriangle()
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
    faces.visible = !!settings.fillAlpha

    wireframe.material.transparent = settings.strokeAlpha !== 100
    wireframe.material.opacity = settings.strokeAlpha / 100
    wireframe.material.linewidth = settings.strokeWidth
    wireframe.visible = !!settings.strokeAlpha

    wythoffframe.material.transparent = settings.strokeWythoffAlpha !== 100
    wythoffframe.material.opacity = settings.strokeWythoffAlpha / 100
    wythoffframe.material.linewidth = settings.strokeWythoffWidth
    wythoffframe.visible = !!settings.strokeWythoffAlpha

    faces.geometry.setDrawRange(0, 0)
    wireframe.geometry.setDrawRange(0, 0)
    wythoffframe.geometry.setDrawRange(0, 0)
  }
}

const renderRootTriangle = () => {
  let fillColor = null,
    strokeColor = null,
    wythoffColor = null
  if (settings.fillAlpha) {
    fillColor = [
      new Color(settings.fillColorP),
      new Color(settings.fillColorQ),
      new Color(settings.fillColorR),
    ]
  }

  if (settings.strokeAlpha) {
    strokeColor = new Color(settings.strokeColor)
  }

  if (settings.strokeWythoffAlpha) {
    wythoffColor = new Color(settings.strokeWythoffColor)
  }

  const precision = 0.01
  const rootProject = p =>
    poincare(p.map(c => (curvature > 0 ? -c : c))).map(c =>
      curvature <= 0 ? -c : c
    )

  const curvature = getCurvature()
  const edges = getWythoffTriangle(settings)
  const triangle = curvature
    ? [
        intersect(edges[1], edges[2]),
        intersect(edges[2], edges[0]),
        intersect(edges[0], edges[1]),
        edges[3],
        intersect(edges[5], edges[1]),
        intersect(edges[6], edges[2]),
        intersect(edges[4], edges[0]),
      ]
    : edges

  interestingPoints = [
    // Snap to center
    incenter(...edges),
    // Snap to points
    ...triangle.slice(0, 3),
    // Snap to bisectors
    ...bisectorOpposites(...edges),
  ]

  const points = triangle.map(rootProject)
  const xmax = Math.max(...points.map(p => p[0]))
  const ymax = Math.max(...points.map(p => p[1]))
  const max = Math.max(xmax, ymax)
  rootRatio = rootSize / max

  const root = ([x, y]) => [
    rootMargin + x * rootRatio,
    rootMargin + rootSize - y * rootRatio,
  ]

  rootCanvas.width = xmax * rootRatio + rootMargin * 2
  rootCanvas.height = rootSize + rootMargin * 2

  const draw = c => {
    for (let i = 0; i < c.length; i++) {
      rootCtx.lineTo(...root(rootProject(c[i])))
    }
  }
  const curveChain = (...points) => {
    for (let i = 0; i < points.length - 1; i++) {
      draw(curve(points[i], points[i + 1], precision))
    }
  }
  for (let j = 0; j < 3; j++) {
    const w1 = 3 + 1 + j
    const w2 = 3 + 1 + ((j + 1) % 3)
    validDraws[j] = [
      !near(triangle[3], triangle[w1]),
      !near(triangle[j], triangle[w1]),
      !near(triangle[j], triangle[w2]),
      !near(triangle[3], triangle[w2]),
    ]
    validDraws[j].fillValid = validDraws[j].filter(x => x).length >= 3
  }
  validDraws.fills = validDraws.filter(x => x.fillValid).length

  rootCtx.strokeStyle = settings.strokeColor
  for (let i = 0; i < 3; i++) {
    rootCtx.fillStyle = fillColor && fillColor[i].getStyle()
    rootCtx.beginPath()
    if (fillColor) {
      curveChain(
        triangle[3],
        triangle[4 + i],
        triangle[i],
        triangle[4 + ((i + 1) % 3)],
        triangle[3]
      )

      rootCtx.globalAlpha = settings.fillAlpha / 100
      rootCtx.fill()
    }
  }

  for (let i = 0; i < 3; i++) {
    if (wythoffColor) {
      rootCtx.beginPath()
      curveChain(triangle[3], triangle[4 + i])
      rootCtx.lineWidth = Math.min(5, settings.strokeWythoffWidth)
      rootCtx.globalAlpha = settings.strokeWythoffAlpha / 100
      rootCtx.strokeStyle = wythoffColor.getStyle()
      rootCtx.stroke()
    }
    if (strokeColor) {
      rootCtx.beginPath()
      curveChain(triangle[4 + i], triangle[i], triangle[4 + ((i + 1) % 3)])
      rootCtx.lineWidth = Math.min(5, settings.strokeWidth)
      rootCtx.globalAlpha = settings.strokeAlpha / 100
      rootCtx.strokeStyle = strokeColor.getStyle()
      rootCtx.stroke()
    }
  }

  const s = 3
  rootCtx.lineWidth = 0
  for (let i = 0; i < interestingPoints.length; i++) {
    const p = root(rootProject(interestingPoints[i]))
    rootCtx.beginPath()
    rootCtx.moveTo(p[0] - s, p[1])
    rootCtx.lineTo(p[0] + s, p[1])
    rootCtx.moveTo(p[0], p[1] - s)
    rootCtx.lineTo(p[0], p[1] + s)
    rootCtx.stroke()
  }
}

const render = () => {
  if (reverting) {
    return
  }
  if (
    settings.wp !== polygons.wp ||
    settings.wq !== polygons.wq ||
    settings.wr !== polygons.wr ||
    settings.p !== polygons.p ||
    settings.q !== polygons.q ||
    settings.r !== polygons.r
  ) {
    return
  }
  showStats.showStats && stats.begin()
  clear()

  pos = 0
  linePos = 0
  lineWythoffPos = 0
  index = []
  lineIndex = []
  lineWythoffIndex = []
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
    if (lineWythoffIndex.length !== wythoffframe.geometry.drawRange.count) {
      wythoffframe.geometry.setIndex(lineWythoffIndex)
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
    if (wythoffframe.visible) {
      wythoffframe.geometry.setDrawRange(0, lineWythoffIndex.length)
      wythoffframe.geometry.attributes.position.needsUpdate = true
      wythoffframe.geometry.attributes.color.needsUpdate = true
    }

    renderer.render(scene, camera)
  }

  showStats.showStats && stats.end()
}

const translate = offset => {
  transformations.push({ type: 'translate', parameter: offset })

  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center, wythoffs } = orderPolygons[i]
      translateVertex(center, offset)
      for (let j = 0; j < vertices.length; j++) {
        translateVertex(vertices[j], offset)
      }
      for (let j = 0; j < wythoffs.length; j++) {
        for (let l = 0; l < wythoffs[j].length; l++) {
          translateVertex(wythoffs[j][l], offset)
        }
      }
    }
  }
}

const rotate = theta => {
  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center, wythoffs } = orderPolygons[i]
      rotateVertex(center, theta)
      for (let j = 0; j < vertices.length; j++) {
        rotateVertex(vertices[j], theta)
      }
      for (let j = 0; j < wythoffs.length; j++) {
        for (let l = 0; l < wythoffs[j].length; l++) {
          rotateVertex(wythoffs[j][l], theta)
        }
      }
    }
  }
}

const scale = factor => {
  transformations.push({ type: 'scale', parameter: factor })

  for (let o = 0; o < polygons.length; o++) {
    const orderPolygons = polygons[o]
    for (let i = 0; i < orderPolygons.length; i++) {
      const { vertices, center, wythoffs } = orderPolygons[i]
      scaleVertex(center, factor)
      for (let j = 0; j < vertices.length; j++) {
        scaleVertex(vertices[j], factor)
      }
      for (let j = 0; j < wythoffs.length; j++) {
        for (let l = 0; l < wythoffs[j].length; l++) {
          scaleVertex(wythoffs[j][l], factor)
        }
      }
    }
  }
}

const gui = new GUI({
  load: presets,
  preset,
})

gui.remember(settings)

const pqrChange = () => {
  setCurvature(settings)

  if (reverting) {
    return
  }
  if (
    settings.wp !== polygons.wp ||
    settings.wq !== polygons.wq ||
    settings.wr !== polygons.wr ||
    settings.p !== polygons.p ||
    settings.q !== polygons.q ||
    settings.r !== polygons.r
  ) {
    renderRootTriangle()
    checkWythoff([settings.wp, settings.wq, settings.wr], true)
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

const styleChange = () => {
  if (reverting) {
    return
  }
  renderRootTriangle()
  render()
}
const updateProjection = () => {
  let regen = false
  if (backend !== '3d' && views.includes(settings.projection)) {
    backend = '3d'
    canvas.style.display = 'none'
    renderer.domElement.style.display = 'block'
    regen = true
  } else if (backend !== '2d' && !views.includes(settings.projection)) {
    backend = '2d'
    canvas.style.display = 'block'
    renderer.domElement.style.display = 'none'
  }
  if (settings.projection === '3d poincare') {
    camera.fov = 90
    camera.position.set(0, 0, -1)
    controls.target.set(0, 0, 1)
    camera.updateProjectionMatrix()
    controls.update()
  } else if (settings.projection === '3d klein') {
    camera.fov = 90
    camera.position.set(0, 0, 0)
    controls.target.set(0, 0, 1)
    camera.updateProjectionMatrix()
    controls.update()
  } else if (settings.projection === '3d inverted') {
    camera.fov = 130
    camera.position.set(0, 0, 2)
    controls.target.set(0, 0, 4)
    camera.updateProjectionMatrix()
    controls.update()
  } else if (settings.projection === '3d stereographic') {
    camera.fov = 90
    camera.position.set(0, 0, 0.1)
    controls.target.set(0, 0, 0)
    camera.updateProjectionMatrix()
    controls.update()
  } else if (settings.projection === '3d orthographic') {
    camera.fov = 90
    camera.position.set(0, 0, -2)
    controls.target.set(0, 0, 0)
    camera.updateProjectionMatrix()
    controls.update()
  }
  updateRadius()
  if (!reverting) {
    regen && regenerate()
  }
  size()
}

gui
  .add(settings, 'projection', Object.keys(projections).concat(views))
  .onChange(updateProjection)
gui.add(settings, 'p', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'q', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'r', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'wp', -2, 2, 0.001).listen().onChange(pqrChange)
gui.add(settings, 'wq', -2, 2, 0.001).listen().onChange(pqrChange)
gui.add(settings, 'wr', -2, 2, 0.001).listen().onChange(pqrChange)
gui.add(settings, 'layers', 1, 100, 1).onChange(debounce(continueGenerate, 150))
gui.add(settings, 'limit', 1).onChange(debounce(continueGenerate, 150))
const fillGui = gui.addFolder('Fill Style')
fillGui.add(settings, 'fill', FILL_COLOR_TYPES).onChange(styleChange)
fillGui.addColor(settings, 'fillColorP').onChange(styleChange)
fillGui.addColor(settings, 'fillColorQ').onChange(styleChange)
fillGui.addColor(settings, 'fillColorR').onChange(styleChange)
fillGui
  .add(settings, 'fillColorShift', -359, 359, 1)
  .onChange(() => regenerate())
fillGui.add(settings, 'fillAlpha', 0, 100, 1).onChange(styleChange)
fillGui.add(settings, 'wedgeShade', 0, 100, 1).onChange(styleChange)

const strokeGui = gui.addFolder('Stroke Style')
strokeGui.add(settings, 'stroke', STROKE_COLOR_TYPES).onChange(styleChange)
strokeGui.addColor(settings, 'strokeColor').onChange(styleChange)
strokeGui
  .add(settings, 'strokeColorShift', -359, 359, 1)
  .onChange(() => regenerate())
strokeGui.add(settings, 'strokeAlpha', 0, 100, 1).onChange(styleChange)
strokeGui.add(settings, 'strokeWidth', 0.1, 30, 0.1).onChange(styleChange)
strokeGui.add(settings, 'strokeScaled').onChange(styleChange)
strokeGui.addColor(settings, 'backgroundColor').onChange(styleChange)
strokeGui
  .add(settings, 'strokeWythoff', STROKE_COLOR_TYPES)
  .onChange(styleChange)
strokeGui.addColor(settings, 'strokeWythoffColor').onChange(styleChange)
strokeGui
  .add(settings, 'strokeWythoffColorShift', -359, 359, 1)
  .onChange(() => regenerate())
strokeGui.add(settings, 'strokeWythoffAlpha', 0, 100, 1).onChange(styleChange)
strokeGui
  .add(settings, 'strokeWythoffWidth', 0.1, 30, 0.1)
  .onChange(styleChange)

gui.addColor(settings, 'backgroundColor').onChange(render)
gui.add(settings, 'straight').onChange(() => regenerate())

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
      updateProjection()
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

interact('#c2d,#c3d')
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
      if (backend !== '3d') {
        rotate(-(Math.PI * e.da) / 180)
        scale(-e.ds)
        render()
      }
    },
  })

init2d()
init3d()

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
  wythoffframe,
  scene,
  camera,
  controls,
  canvas,
  ctx,
  rootCanvas,
  rootCtx,
}

renderer.domElement.id = 'c3d'
canvas.id = 'c2d'
rootCanvas.id = 'rc2d'
rootCanvas.width = rootSize
rootCanvas.height = rootSize

document.body.appendChild(renderer.domElement)
document.body.appendChild(canvas)
document.body.appendChild(rootCanvas)
document.body.appendChild(stats.dom)

const fromPoincare = ([x, y]) => {
  const curvature = getCurvature()
  if (!curvature) {
    return [x, y, 0]
  } else {
    const s = -curvature * Math.min(0.999, x * x + y * y)
    const nr = 1 / (1 - s)
    return [2 * x * nr, 2 * y * nr, (1 + s) * nr]
  }
}

const checkWythoff = (newWythoff, free) => {
  const curvature = getCurvature()
  if (curvature) {
    newWythoff = normalize(newWythoff)
  }
  const edges = getWythoffTriangle(settings, newWythoff)

  if (!inTriangle(newWythoff, ...edges)) {
    newWythoff = intersectTriangleByincenter(newWythoff, ...edges)
  }

  let nearest,
    nearestSqDist = Infinity
  for (let i = 0; i < interestingPoints.length; i++) {
    const point = interestingPoints[i].map(c => (curvature > 0 ? -c : c))
    const v = vec(newWythoff, point)
    const sqDist = dot(v, v, 1)
    if (sqDist < nearestSqDist) {
      nearestSqDist = sqDist
      nearest = point
    }
  }

  const minSqDist = curvature ? 0.001 : 0.01
  if (!free && nearestSqDist < minSqDist) {
    settings.wp = nearest[0]
    settings.wq = nearest[1]
    settings.wr = nearest[2]
  } else {
    settings.wp = newWythoff[0]
    settings.wq = newWythoff[1]
    settings.wr = newWythoff[2]
  }
  if (curvature <= 0) {
    settings.wp *= -1
    settings.wq *= -1
  }
}

const wyth = e => {
  const curvature = getCurvature()
  const { left, top } = e.target.getBoundingClientRect()
  const x = e.clientX - left - rootMargin
  const y = e.clientY - top - rootMargin
  const nr = 1 / rootRatio
  let u = [x * nr, (rootSize - y) * nr]
  if (curvature <= 0) {
    u = u.map(c => -c)
  }
  checkWythoff(fromPoincare(u), e.shiftKey)
  regenerate()
  e.stopPropagation()
}
rootCanvas.addEventListener(
  'pointerdown',
  e => {
    wyth(e)
    rootCanvas.addEventListener('pointermove', wyth, true)
    rootCanvas.setPointerCapture(e.pointerId)
  },
  true
)
rootCanvas.addEventListener(
  'pointerup',
  e => {
    rootCanvas.removeEventListener('pointermove', wyth, true)
    rootCanvas.releasePointerCapture(e.pointerId)
  },
  true
)

gui.revert()

stats.showPanel(null)
renderer.setAnimationLoop(() => {
  if (backend === '3d') {
    renderer.render(scene, camera)
  }
})
