let curvature, tokenPrecision, tokenSize

export const setCurvature = ({ p, q, r }) => {
  const anglesSum = 1 / p + 1 / q + 1 / r
  if (Math.abs(anglesSum - 1) < 1e-5) {
    curvature = 0
  } else if (anglesSum - 1 < 1e-5) {
    curvature = -1
  } else {
    curvature = 1
  }
}

export const getCurvature = () => curvature

export const setTokenPrecision = precision => {
  tokenPrecision = precision
  tokenSize = 10 ** precision
}
export const normalize = ([x, y, z], c = curvature) => {
  if (c === 0) {
    return [x / z, y / z, 1]
  }
  let nr = c * x * x + c * y * y + z * z
  if (nr === 0) {
    return [0, 0, 1]
  }
  if (c < 0 && nr < 0) {
    // This is not necessary but prevent some crashes when normalizing wythoff
    nr *= -1
  }
  const k = (c === -1 ? Math.sign(z) || 1 : 1) / Math.sqrt(nr)
  return [x * k, y * k, z * k]
}

export const dot = ([xa, ya, za], [xb, yb, zb], c = curvature) =>
  xa * xb + ya * yb + c * za * zb

export const cross = ([xa, ya, za], [xb, yb, zb], c = curvature) => [
  ya * zb - za * yb,
  za * xb - xa * zb,
  (c || 1) * (xa * yb - ya * xb),
]

export const swap = (a, b, p) => (p ? [b, a] : [a, b])

export const intersect = (a, b, p) => normalize(cross(...swap(a, b, p)))

export const bisect = (a, b) => {
  if (curvature <= 0) {
    const ab = [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
    return normalize(ab, 1)
  }
  const halfab = [0.5 * (a[0] + b[0]), 0.5 * (a[1] + b[1]), 0.5 * (a[2] + b[2])]
  return intersect(cross(a, b), halfab, false)
}

export const dist = a => Math.sqrt(dot(a, a, 1))
export const vec = ([xa, ya, za], [xb, yb, zb]) => [xb - xa, yb - ya, zb - za]

export const near = ([xa, ya, za], [xb, yb, zb]) =>
  Math.abs(xb - xa) < 1e-6 &&
  Math.abs(yb - ya) < 1e-6 &&
  Math.abs(zb - za) < 1e-6

export const inTriangle = (P, A, B, C) => {
  const c = curvature || 1
  return c * dot(A, P, c) >= 0 && c * dot(B, P, c) >= 0 && c * dot(C, P, c) >= 0
}

export const incenter = (A, B, C) => {
  return intersect(bisect(A, C), bisect(C, B), true)
}

export const bisectorOpposites = (A, B, C) => {
  return [
    intersect(C, bisect(A, B), true),
    intersect(A, bisect(B, C), true),
    intersect(B, bisect(C, A), true),
  ]
}

export const intersectTriangleByincenter = (P, A, B, C) => {
  const c = curvature || 1
  const I = incenter(A, B, C)
  const IP = normalize(cross(I, P), 1)
  const dAP = dot(bisect(B, C), P, c) * (curvature ? 1 : -1) >= 0
  const dBP = dot(bisect(C, A), P, c) * (curvature ? 1 : -1) >= 0
  const dCP = dot(bisect(A, B), P, c) * (curvature ? 1 : -1) >= 0

  if (dCP && !dBP) {
    return intersect(A, IP, false)
  } else if (dAP && !dCP) {
    return intersect(B, IP, false)
  } else if (dBP && !dAP) {
    return intersect(C, IP, false)
  }
}

export const reflect = (a, b) => {
  const ab2 = (2 * dot(a, b)) / dot(b, b)
  return [a[0] - ab2 * b[0], a[1] - ab2 * b[1], a[2] - ab2 * b[2]]
}

export const getToken = triangle => {
  let str = []
  for (let i = 0; i < 3; i++) {
    str.push(
      String(~~Math.round(tokenSize * triangle[i][0])).padStart(
        tokenPrecision,
        '0'
      ) +
        '|' +
        String(~~Math.round(tokenSize * triangle[i][1])).padStart(
          tokenPrecision,
          '0'
        ) +
        '|' +
        String(~~Math.round(tokenSize * triangle[i][2])).padStart(
          tokenPrecision,
          '0'
        )
    )
  }
  return str.sort().join('/')
}

export const reflectOn = (triangle, i, order, check, tokens) => {
  let j = (i + 1) % 3
  let k = (i + 2) % 3
  const newTriangle = [[], [], [], []]
  newTriangle[j] = reflect(triangle[j], triangle[i])
  newTriangle[k] = reflect(triangle[k], triangle[i])

  newTriangle[3] = reflect(triangle[3], triangle[i])
  newTriangle[4] = reflect(triangle[4], triangle[i])
  newTriangle[5] = reflect(triangle[5], triangle[i])

  newTriangle[i][0] = -triangle[i][0]
  newTriangle[i][1] = -triangle[i][1]
  newTriangle[i][2] = -triangle[i][2]

  newTriangle.parity = 1 - triangle.parity
  const token = getToken(newTriangle, tokenSize)
  if (check) {
    for (let i = order; i >= 0; i--) {
      if (tokens[i][token]) {
        return
      }
    }
  }
  tokens[order][token] = true
  return newTriangle
}

export const getRootTriangle = ({ p, q, r }) => {
  const pAngle = Math.PI / p
  const qAngle = Math.PI / q
  const rAngle = Math.PI / r

  const a =
    (Math.cos(pAngle) * Math.cos(qAngle) + Math.cos(rAngle)) / Math.sin(pAngle)
  const b = Math.cos(qAngle)
  const c = curvature ? Math.sqrt(curvature * (1 - a * a - b * b)) : 1
  return [
    [-b, -a, c],
    [-Math.cos(pAngle), Math.sin(pAngle), 0],
    [1, 0, 0],
  ]
}

/*
    1
   |q\
   |  \  0->
   |   \
2->|   r\ 2
   |   /
   |p/   1->
   0
   C
*/

export const getPolygon = (triangle, p, order, polygons, triangles, tokens) => {
  polygons[order] = polygons[order] || []
  triangles[order] = triangles[order] || []
  tokens[order] = tokens[order] || {}
  const parity = triangle.parity
  const vertices = []
  const wythoffs = []
  if (order > 0) {
    if (!(triangle = reflectOn(triangle, 0, order, true, tokens))) {
      return
    }
  } else {
    tokens[order][getToken(triangle)] = true
  }

  const center = intersect(triangle[2], triangle[1], triangle.parity)
  vertices.push(
    intersect(triangle[1], triangle[0], triangle.parity),
    intersect(triangle[0], triangle[2], triangle.parity)
  )
  wythoffs.push([
    intersect(triangle[4], triangle[3], triangle.parity),
    intersect(triangle[1], triangle[4], triangle.parity),
    intersect(triangle[2], triangle[5], triangle.parity),
    intersect(triangle[0], triangle[3], triangle.parity),
  ])
  const rootEdges = [...triangle]
  rootEdges.parity = triangle.parity
  triangles[order].push(rootEdges)

  for (let n = 0; n < p * 2 - 1; n++) {
    triangle = reflectOn(triangle, 1 + ((n + 1) % 2), order, true, tokens)
    if (!triangle) {
      break
    }
    vertices.push(
      n % 2
        ? intersect(triangle[0], triangle[2], triangle.parity)
        : intersect(triangle[1], triangle[0], triangle.parity)
    )
    wythoffs.push([
      intersect(triangle[4], triangle[3], triangle.parity),
      intersect(triangle[1], triangle[4], triangle.parity),
      intersect(triangle[2], triangle[5], triangle.parity),
      intersect(triangle[0], triangle[3], triangle.parity),
    ])
    const subEdges = [...triangle]
    subEdges.parity = triangle.parity
    triangles[order].push(subEdges)
  }

  const polygon = {
    vertices,
    center,
    wythoffs,
    order,
    parity,
  }
  polygons[order].push(polygon)
  return polygon
}

const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset

  const cxt = Math.sqrt(1 + xt * xt) // Math.cosh(Math.asinh(xt))
  const cyt = Math.sqrt(1 + yt * yt) // Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt
}

const ellipticTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset
  const cxt = Math.sqrt(1 - xt * xt) // Math.cos(Math.asin(xt))
  const cyt = Math.sqrt(1 - yt * yt) // Math.cos(Math.asin(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt + b * xt
  vertex[1] = ye * cyt - ze * yt
  vertex[2] = -a * xt + b * cxt
}

const parabolicTranslate = (vertex, offset) => {
  let [xe, ye] = vertex
  const [xt, yt] = offset

  vertex[0] = xe - xt
  vertex[1] = ye + yt
}

const rotate = (vertex, theta) => {
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
  const offset = [vertex[0] * nr, -vertex[1] * nr, vertex[2] * nr]
  hyperbolicTranslate(vertex, offset)
}

const ellipticScale = (vertex, scale) => {
  const [xe, ye, ze] = vertex
  const nr = scale / Math.sqrt(xe * xe + ye * ye + ze * ze)
  const offset = [vertex[0] * nr, -vertex[1] * nr, vertex[2] * nr]
  ellipticTranslate(vertex, offset)
}

const parabolicScale = (vertex, scale) => {
  let [xe, ye, ze] = vertex

  vertex[0] = xe * (1 - scale)
  vertex[1] = ye * (1 - scale)
  vertex[2] = ze * (1 - scale)
}

const translations = [
  hyperbolicTranslate,
  parabolicTranslate,
  ellipticTranslate,
]

export const translateVertex = (vertex, offset) =>
  translations[curvature + 1](vertex, offset)

const scales = [hyperbolicScale, parabolicScale, ellipticScale]

export const scaleVertex = (vertex, factor) =>
  scales[curvature + 1](vertex, factor)

export const rotateVertex = rotate

const transformations = {
  translate: translateVertex,
  scale: scaleVertex,
  rotater: rotateVertex,
}

export const transformVertex = (type, vertex, parameter) =>
  transformations[type](vertex, parameter)

const t2s = (t, uv) => Math.sqrt(t * t * (uv * uv - 1) + 1) - curvature * uv * t

export const curve = (u, v, curveStep) => {
  const vertices = [u]
  if (curvature) {
    const uv = dot(u, v)
    for (let t = 1 - curveStep; t > 0; t -= curveStep) {
      const s = t2s(t, uv)
      vertices.push([
        u[0] * t + v[0] * s,
        u[1] * t + v[1] * s,
        u[2] * t + v[2] * s,
      ])
    }
  }
  vertices.push(v)
  return vertices
}

export const perps = (w, triangle) => {
  let perps = []
  for (let i = 0; i < 3; i++) {
    let a = triangle[i]
    if (!curvature) {
      a = [a[0], a[1], 0]
    }
    perps.push(normalize(cross(a, w), 1))
  }

  return perps
}
