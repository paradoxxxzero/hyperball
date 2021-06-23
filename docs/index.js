import Stats from './_snowpack/pkg/statsjs.js'
import interact from './_snowpack/pkg/interactjs.js'
import { parse } from './_snowpack/pkg/qs.js'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

let r, width, height, w2, h2, polygons

const resize = () => {
  ;({ width, height } = document.body.getBoundingClientRect())
  canvas.width = width
  canvas.height = height
  w2 = width / 2
  h2 = height / 2
  r = Math.min(w2, h2) * 0.9
  render()
}

const range = n => new Array(n).fill().map((_, i) => i)

const {
  p = 5,
  q = 5,
  limit = 10000,
  colored = false,
} = parse(location.search, { ignoreQueryPrefix: true })

const stats = new Stats()
document.body.appendChild(stats.dom)

const toDisk = ([x, y]) => [w2 + x * r, h2 - y * r]
const fromDisk = ([x, y]) => [(x - w2) / r, (h2 - y) / r]

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
  const T = (x2 * y1 - x1 * y2) / (1 - x1 * x2 - y1 * y2)
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

const hyperbolicTranslate = (vertex, offset, s = 1) => {
  // https://www.researchgate.net/publication/268710591_Gyrovector_spaces_and_their_differential_geometry
  // u (+) v = ((1 + 2/s² u . v + 1 / s² ||v||²) u + (1 - 1 / s² ||u||²) v) / (1 + 2/s² u . v + 1 / s⁴ ||u||² ||v||²)
  const [xa, ya] = offset
  const [xb, yb] = vertex

  const bb = xb * xb + yb * yb
  const aa = xa * xa + ya * ya
  const ab = xa * xb + ya * yb

  const invs2 = 1 / (s * s)

  const u = 1 + (2 * ab + bb)
  const v = 1 - invs2 * aa
  const w = 1 / (1 + 2 * invs2 * ab + invs2 * invs2 * aa * bb)

  vertex[0] = (xa * u + xb * v) * w
  vertex[1] = (ya * u + yb * v) * w
}

const hyperbolicRotate = (vertex, theta) => {
  // Rotation is an isometry in HH
  const [x, y] = vertex
  const c = Math.cos(theta)
  const s = Math.sin(theta)
  vertex[0] = x * c - y * s
  vertex[1] = x * s + y * c
}

const hyperbolicScale = (vertex, scale, s = 1) => {
  // Trying Einstein scalar multiplication but this seems wrong
  const [x, y] = vertex
  const norm = Math.sqrt(x * x + y * y)
  vertex[0] = s * Math.tanh(scale * Math.atanh(norm / s)) * (x / norm)
  vertex[1] = s * Math.tanh(scale * Math.atanh(norm / s)) * (y / norm)
}

const getPolygon = () => {
  const angleA = Math.PI / p
  const angleB = Math.PI / q
  const angleC = Math.PI / 2.0
  const sinA = Math.sin(angleA)
  const sinB = Math.sin(angleB)
  let s =
    Math.sin(angleC - angleB - angleA) /
    Math.sqrt(1.0 - sinB * sinB - sinA * sinA)
  s = (s * s + 1.0) / (2.0 * s * Math.cos(angleA))
  s = s - Math.sqrt(s * s - 1.0)
  // let s = 0.39
  let vertices = []
  for (let i = 0; i < p; i++) {
    vertices[i] = [s * Math.cos(2 * i * angleA), s * Math.sin(2 * i * angleA)]
  }
  return vertices
}

const applyRule = (rule, i, polygons) => {
  let special = rule[i] === 1
  let r = special ? 2 : rule[i]
  let start = r == 4 ? 3 : 2
  let quantity = q == 3 && r != 0 ? p - r - 1 : p - r
  for (let s = 0; s < quantity; s++) {
    polygons.push(createNextPolygon(polygons[i], (s + start) % p))
    rule.push(q == 3 && s == 0 && r != 0 ? 4 : 3)
    for (let m = special ? 2 : s == 2 && r != 0 ? 1 : 0; m < q - 3; m++) {
      polygons.push(createNextPolygon(polygons[polygons.length - 1], 1))
      rule.push(p == 3 && m == k - 4 ? 1 : 2)
    }
  }
}

const createNextPolygon = (polygon, s) => {
  const newPolygon = []

  const [x0, y0] = polygon[s]
  const t = (1 + x0 * x0 + y0 * y0) / 2
  for (let i = 0; i < p; ++i) {
    const [x1, y1] = polygon[i]
    const j = (p + i - s) % p
    const numeratorX = x0 - t * x1
    const numeratorY = y0 - t * y1
    const denominatorX = t - (x1 * x0 + y1 * y0)
    const denominatorY = x1 * y0 - y1 * x0
    const nr = denominatorX * denominatorX + denominatorY * denominatorY

    newPolygon[j] = [
      (numeratorX * denominatorX + numeratorY * denominatorY) / nr,
      (numeratorY * denominatorX - numeratorX * denominatorY) / nr,
    ]
  }
  return newPolygon
}

const generatePolygons = () => {
  polygons = [getPolygon()]
  const rule = [0]

  let polygonIndex = 0
  while (polygons.length < limit) {
    applyRule(rule, polygonIndex++, polygons)
  }
}

const translate = offset => {
  for (let i = 0; i < polygons.length; i++) {
    const vertices = polygons[i]
    for (let j = 0; j < vertices.length; j++) {
      hyperbolicTranslate(vertices[j], offset)
    }
  }
}

const rotate = theta => {
  for (let i = 0; i < polygons.length; i++) {
    const vertices = polygons[i]
    for (let j = 0; j < vertices.length; j++) {
      hyperbolicRotate(vertices[j], theta)
    }
  }
}

const scale = scale => {
  const s = 1
  for (let i = 0; i < polygons.length; i++) {
    const vertices = polygons[i]
    for (let j = 0; j < vertices.length; j++) {
      hyperbolicScale(vertices[j], scale)
    }
  }
}

const render = () => {
  stats.begin()

  // ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = 'white'
  for (var i = 0, l = polygons.length; i < l; i++) {
    colored !== false && (ctx.fillStyle = `hsl(${i}deg, 50%, 60%)`)
    const vertices = polygons[i]
    ctx.beginPath()

    const p0 = toDisk(vertices[0])
    ctx.moveTo(p0[0], p0[1])
    for (var j = 0, m = vertices.length; j < m; j++) {
      const v1 = vertices[j]
      const v2 = vertices[(j + 1) % vertices.length]
      const vv2 = toDisk(v2)
      const dx = v2[0] - v1[0]
      const dy = v2[1] - v1[1]
      const d = dx * dx + dy * dy
      if (d < 0.0005) {
        ctx.lineTo(vv2[0], vv2[1])
      } else {
        const [x1, y1, x2, y2] = getControl(v1[0], v1[1], v2[0], v2[1])
        const p1 = toDisk([x1, y1])
        const p2 = toDisk([x2, y2])
        ctx.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], vv2[0], vv2[1])
      }
    }

    ctx.fill()
    // ctx.stroke()
  }
  stats.end()
}
generatePolygons()
resize()

interact('canvas')
  .draggable({
    listeners: {
      move: e => {
        if (e.ctrlKey) {
          rotate(e.dx / r)
        } else if (e.shiftKey) {
          scale(1 + e.dy / r)
        } else {
          translate([e.dx / r, -e.dy / r])
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

window.ondeviceorientation = window.onresize = resize
