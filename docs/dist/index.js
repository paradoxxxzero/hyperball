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
import { projections, poincare } from './projections.js'
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
  interestingPoints = []

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
  ctx.lineJoin = 'mitter'
  ctx.lineCap = 'butt'
  ctx.mitterLimit = 1
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
  controls = new OrbitControls(camera, renderer.domElement)
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
  wythoffframe = new LineSegments(lineWedgesGeometry, lineWedgesMaterial)
  wythoffframe.scale.setScalar(0.995)
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

const views = ['3d poincare', '3d klein', '3d inverted', '3d inside']
const project = p => projections[settings.projection](p)
const black = new Color('black')
const renderPolygon = ({ vertices, center, wythoffs, order, parity }) => {
  if (vertices.length < 2) {
    return
  }
  const curvature = getCurvature()
  let fillColor = null,
    wedgesFillColor = null,
    strokeColor = null,
    wythoffColor = null

  if (settings.fillAlpha) {
    fillColor = [
      new Color(settings.fillColorR),
      new Color(settings.fillColorP),
      new Color(settings.fillColorQ),
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
    for (let i = 0; i < settings.p * 2; i++) {
      const wythoff = wythoffs[i]

      for (let j = 0; j < 3; j++) {
        const vert =
          i % 2
            ? [center, vertices[i + 1], vertices[i]]
            : [center, vertices[i], vertices[1 + i]]
        const p = ((curvature ? 3 : 4) - j) % 3
        render3dVertices(
          wythoff[0],
          wythoff[1 + j],
          vert[p],
          wythoff[1 + ((j + 1) % 3)],
          j,
          fillColor && (parity === i % 2 ? wedgesFillColor : fillColor)[p],
          strokeColor,
          wythoffColor
        )
      }
    }
    return
  }

  // let polyVertices = []
  // if (settings.r === 2 && curvature < 0) {
  //   // Optimization
  //   for (let i = 0; i < settings.p; i++) {
  //     polyVertices.push(vertices[(i * 2) % vertices.length])
  //   }
  // } else {
  //   polyVertices = vertices
  // }
  // renderVertices(polyVertices)

  // if (settings.wedges) {
  //   ctx.save()
  //   for (let i = 0; i < settings.p; i++) {
  //     renderVertices(
  //       [
  //         center,
  //         vertices[(i * 2 + parity) % vertices.length],
  //         vertices[(i * 2 + parity + 1) % vertices.length],
  //       ],
  //       true
  //     )
  //   }
  //   ctx.restore()
  // }

  // W
  for (let i = 0; i < settings.p * 2; i++) {
    const wythoff = wythoffs[i]

    if (fillColor) {
      for (let j = 0; j < 3; j++) {
        const vert =
          i % 2
            ? [center, vertices[i + 1], vertices[i]]
            : [center, vertices[i], vertices[1 + i]]
        const p = ((curvature ? 3 : 4) - j) % 3

        renderVertices(
          [
            wythoff[0],
            wythoff[1 + j],
            vert[p],
            wythoff[1 + ((j + 1) % 3)],
            wythoff[0],
          ],
          fillColor &&
            (parity === i % 2 ? wedgesFillColor : fillColor)[p].getStyle()
        )
      }
    }
    if (wythoffColor) {
      for (let j = 0; j < 3; j++) {
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
      for (let j = 0; j < 3; j++) {
        const vert =
          i % 2
            ? [center, vertices[i + 1], vertices[i]]
            : [center, vertices[i], vertices[1 + i]]
        const p = ((curvature ? 3 : 4) - j) % 3
        if (p === 0) {
          continue
        }
        renderVertices(
          p === 1
            ? [wythoff[1 + j], vert[p]]
            : [vert[p], wythoff[1 + ((j + 1) % 3)]],
          null,
          strokeColor && strokeColor.getStyle(),
          settings.strokeAlpha,
          settings.strokeWidth
        )
      }
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
  ctx.beginPath()

  const straight = settings.projection === 'klein' || settings.straight
  for (let i = 0, m = vertices.length; i < m; i++) {
    const u = vertices[i]
    const pu = toDisk(project(u))
    const v = vertices[(i + 1) % m]
    const pv = toDisk(project(v))
    ctx.lineTo(pu[0], pu[1])
    if (!straight) {
      const realDist = Math.sqrt((pu[0] - pv[0]) ** 2 + (pu[1] - pv[1]) ** 2)
      const curvedVertices = curve(
        u,
        v,
        Math.max(0.01, (20 - settings.curvePrecision) / realDist)
      )

      for (let j = 1, n = curvedVertices.length; j < n; j++) {
        const p = toDisk(project(curvedVertices[j]))
        ctx.lineTo(p[0], p[1])
        if (
          settings.projection === 'orthographic' &&
          (p[0] > width || p[0] < 0 || p[1] > height || p[1] < 0)
        ) {
          break
        }
      }
    }
    ctx.lineTo(pv[0], pv[1])

    if (i === 1 && strokeColor) {
      ctx.lineWidth = strokeWidth
      ctx.globalAlpha = strokeAlpha / 100
      ctx.strokeStyle = strokeColor
      ctx.stroke()
    }
  }

  if (fillColor) {
    ctx.globalAlpha = settings.fillAlpha / 100
    ctx.fillStyle = fillColor
    ctx.fill()
  }
}

const render3dVertices = (
  c,
  u,
  v,
  w,
  part,
  fillColor,
  strokeColor,
  wedgesStrokeColor
) => {
  const positions = faces.geometry.attributes.position.array
  const colors = faces.geometry.attributes.color.array
  const lineColors = wireframe.geometry.attributes.color.array
  const lineWedgesColors = wythoffframe.geometry.attributes.color.array
  // TODO: redo curved
  const curved = settings.projection !== 'klein' && !settings.straight
  const precision = Math.max(0.01, (20 - settings.curvePrecision) / 50)
  const vertices = curved
    ? [
        [],
        curve(c, u, precision),
        curve(u, v, precision),
        curve(v, w, precision),
        curve(w, c, precision),
      ]
    : [[c], [u], [v], [w], [c]]
  const curvature = getCurvature()
  const p = ((curvature ? 3 : 4) - part) % 3
  const centerPos = pos
  for (let j = 0, m = vertices.length; j < m; j++) {
    const verts = vertices[j]

    for (let k = 0, n = verts.length; k < n; k++) {
      const vertex = verts[k]
      positions[pos * 3] = vertex[0]
      positions[pos * 3 + 1] = vertex[1]
      positions[pos * 3 + 2] = vertex[2]

      if (faces.visible) {
        pos > centerPos + 1 && index.push(centerPos, pos - 1, pos)
        colors[pos * 3] = fillColor.r
        colors[pos * 3 + 1] = fillColor.g
        colors[pos * 3 + 2] = fillColor.b
      }

      if (wireframe.visible) {
        lineColors[pos * 3] = strokeColor.r
        lineColors[pos * 3 + 1] = strokeColor.g
        lineColors[pos * 3 + 2] = strokeColor.b
        if ((part > 0 && p === 2 && j === 3) || (p === 1 && j === 2)) {
          lineIndex.push(pos - 1, pos)
        }
      }

      if (wythoffframe.visible) {
        lineWedgesColors[pos * 3] = wedgesStrokeColor.r
        lineWedgesColors[pos * 3 + 1] = wedgesStrokeColor.g
        lineWedgesColors[pos * 3 + 2] = wedgesStrokeColor.b
        j === 1 && lineWedgesIndex.push(pos - 1, pos)
      }
      pos++
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
  const root = getRootTriangle({ p, q, r })

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
    lineWedgesIndex = []
    pos = 0
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
      if (wythoffframe.visible) {
        wythoffframe.geometry.setIndex(lineWedgesIndex)
        wythoffframe.geometry.setDrawRange(0, lineWedgesIndex.length)
        wythoffframe.geometry.attributes.position.needsUpdate = true
        wythoffframe.geometry.attributes.color.needsUpdate = true
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
    faces.visible = settings.fillAlpha

    wireframe.material.transparent = settings.strokeAlpha !== 100
    wireframe.material.opacity = settings.strokeAlpha / 100
    wireframe.material.linewidth = settings.strokeWidth
    wireframe.visible = settings.strokeAlpha

    wythoffframe.material.transparent = settings.strokeWythoffAlpha !== 100
    wythoffframe.material.opacity = settings.strokeWythoffAlpha / 100
    wythoffframe.material.linewidth = settings.strokeWythoffWidth
    wythoffframe.visible = settings.strokeWythoffAlpha

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
      new Color(settings.fillColorR),
      new Color(settings.fillColorP),
      new Color(settings.fillColorQ),
    ]
  }

  if (settings.strokeAlpha) {
    strokeColor = new Color(settings.strokeColor)
  }

  if (settings.strokeWythoffAlpha) {
    wythoffColor = new Color(settings.strokeWythoffColor)
  }

  const precision = 0.01
  const rootProject = p => poincare(p).map(c => (curvature !== 0 ? -c : c))

  const curvature = getCurvature()
  const edges = getWythoffTriangle(settings)

  const triangle = curvature
    ? [
        intersect(edges[0], edges[1]),
        intersect(edges[0], edges[2]),
        intersect(edges[2], edges[1]),
        edges[3],
        intersect(edges[4], edges[0]),
        intersect(edges[5], edges[1]),
        intersect(edges[6], edges[2]),
      ]
    : [edges[2], edges[1], edges[0], edges[3], edges[4], edges[5], edges[6]]

  const points = triangle.map(rootProject)
  const xmax = Math.max(...points.map(p => p[0]))
  const ymax = Math.max(...points.map(p => p[1]))
  const max = Math.max(xmax, ymax)
  rootRatio = rootSize / max

  const root = ([x, y]) => [x * rootRatio, rootSize - y * rootRatio]

  rootCanvas.width = xmax * rootRatio + 5

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

  rootCtx.strokeStyle = settings.strokeColor
  for (let i = 0; i < 3; i++) {
    const p = ((curvature ? 3 : 4) - i) % 3
    rootCtx.fillStyle = fillColor && fillColor[p].getStyle()
    rootCtx.beginPath()

    if (fillColor) {
      curveChain(
        triangle[3],
        triangle[4 + i],
        triangle[p],
        triangle[4 + ((i + 1) % 3)],
        triangle[3]
      )

      rootCtx.globalAlpha = settings.fillAlpha / 100
      rootCtx.fill()
    }

    if (wythoffColor) {
      rootCtx.beginPath()
      curveChain(triangle[3], triangle[4 + i])
      rootCtx.lineWidth = settings.strokeWythoffWidth
      rootCtx.globalAlpha = settings.strokeWythoffAlpha / 100
      rootCtx.strokeStyle = wythoffColor.getStyle()
      rootCtx.stroke()
    }
    if (strokeColor) {
      rootCtx.beginPath()
      curveChain(triangle[4 + i], triangle[p], triangle[4 + ((i + 1) % 3)])
      rootCtx.lineWidth = settings.strokeWidth
      rootCtx.globalAlpha = settings.strokeAlpha / 100
      rootCtx.strokeStyle = strokeColor.getStyle()
      rootCtx.stroke()
    }
  }

  // for (let i = 0; i < interestingPoints.length; i++) {
  //   rootCtx.fillStyle = 'pink'
  //   const p = root(rootProject(interestingPoints[i]))
  //   rootCtx.fillRect(p[0] - 3, p[1] - 3, 6, 6)
  // }
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
    if (lineWedgesIndex.length !== wythoffframe.geometry.drawRange.count) {
      wythoffframe.geometry.setIndex(lineWedgesIndex)
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
      wythoffframe.geometry.setDrawRange(0, lineWedgesIndex.length)
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
    settings.wr !== polygons.wr
  ) {
    checkWythoff([settings.wp, settings.wq, settings.wr], true)
    regenerate()
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

const styleChange = () => {
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
  } else if (settings.projection === '3d inside') {
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
}

gui
  .add(settings, 'projection', Object.keys(projections).concat(views))
  .onChange(updateProjection)
gui.add(settings, 'p', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'q', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'r', 2, 20, 1).onChange(pqrChange)
gui.add(settings, 'wp', -1, 1, 0.001).listen().onChange(pqrChange)
gui.add(settings, 'wq', -1, 1, 0.001).listen().onChange(pqrChange)
gui.add(settings, 'wr', -1, 1, 0.001).listen().onChange(pqrChange)
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
strokeGui.add(settings, 'strokeWidth', 0.1, 10, 0.1).onChange(styleChange)
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
  .add(settings, 'strokeWythoffWidth', 0.1, 10, 0.1)
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
  const edges = getWythoffTriangle(settings, newWythoff)

  const triangle = curvature
    ? [
        intersect(edges[0], edges[1]),
        intersect(edges[0], edges[2]),
        intersect(edges[2], edges[1]),
        edges[3],
        intersect(edges[4], edges[0]),
        intersect(edges[5], edges[1]),
        intersect(edges[6], edges[2]),
      ]
    : [edges[2], edges[1], edges[0], edges[3], edges[4], edges[5], edges[6]]

  interestingPoints = [
    // Snap to center
    incenter(...edges),
    // Snap to points
    ...triangle.slice(0, 3),
    // Snap to bisectors
    ...bisectorOpposites(...edges),
  ]

  if (!inTriangle(newWythoff, ...edges)) {
    newWythoff = intersectTriangleByincenter(newWythoff, ...edges)
  }

  let nearest,
    nearestSqDist = Infinity
  for (let i = 0; i < interestingPoints.length; i++) {
    const point = interestingPoints[i]
    const v = vec(newWythoff, point)
    const sqDist = dot(v, v)
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
}

const wyth = e => {
  const curvature = getCurvature()
  const { left, top } = e.target.getBoundingClientRect()
  const x = e.clientX - left
  const y = e.clientY - top
  const nr = 1 / rootRatio
  let u = [x * nr, (rootSize - y) * nr]
  if (curvature !== 0) {
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
