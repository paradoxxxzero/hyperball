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
  const nr = c * x * x + c * y * y + z * z
  if (nr === 0) {
    return [0, 0, 0]
  }
  const k = (c === -1 ? Math.sign(z) : 1) / Math.sqrt(nr)
  return [x * k, y * k, z * k]
}

export const dot = ([xa, ya, za], [xb, yb, zb]) =>
  xa * xb + ya * yb + curvature * za * zb

export const cross = ([xa, ya, za], [xb, yb, zb]) => [
  ya * zb - za * yb,
  za * xb - xa * zb,
  curvature * (xa * yb - ya * xb),
]

export const reflect = (a, b) => {
  const ab2 = (2 * dot(a, b)) / dot(b, b)
  return [a[0] - ab2 * b[0], a[1] - ab2 * b[1], a[2] - ab2 * b[2]]
}

export const intersect = (a, b) => normalize(cross(a, b))

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
  const j = (i + 1) % 3
  const k = (i + 2) % 3

  if (curvature === 0) {
    triangle[i] = reflect(
      [
        triangle[j][0] - triangle[i][0],
        triangle[j][1] - triangle[i][1],
        triangle[j][2] - triangle[i][2],
      ],
      [
        triangle[k][0] - triangle[j][0],
        triangle[k][1] - triangle[j][1],
        triangle[k][2] - triangle[j][2],
      ]
    )
    triangle[i][0] += triangle[j][0]
    triangle[i][1] += triangle[j][1]
    triangle[i][2] += triangle[j][2]
  } else {
    triangle[j] = reflect(triangle[j], triangle[i])
    triangle[k] = reflect(triangle[k], triangle[i])
    triangle[i] = [-triangle[i][0], -triangle[i][1], -triangle[i][2]]
  }

  const token = getToken(triangle, tokenSize)
  if (check) {
    for (let i = order; i >= 0; i--) {
      if (tokens[i][token]) {
        return false
      }
    }
  }
  tokens[order][token] = true
  return true
}

export const getRootTriangle = ({ p, q, r }) => {
  const pAngle = Math.PI / p
  const qAngle = Math.PI / q
  const rAngle = Math.PI / r

  if (curvature === 0) {
    const a =
      Math.cos(pAngle) +
      (Math.sin(pAngle) * Math.cos(qAngle)) / Math.sin(qAngle)
    return [
      [Math.sin(pAngle), Math.cos(pAngle), 0],
      [0, a, 0],
      [0, 0, 0],
    ]
  }

  const a =
    (Math.cos(pAngle) * Math.cos(qAngle) + Math.cos(rAngle)) / Math.sin(pAngle)
  const b = Math.cos(qAngle)
  const c = Math.sqrt(curvature * (1 - a * a - b * b))
  return [
    [1, 0, 0],
    [-Math.cos(pAngle), Math.sin(pAngle), 0],
    [b, a, c],
  ]
}

/*
    1
   |q\
   |  \   2->
   |   \
0->|   r\ 0
   |   /
   |p/   1->
   2
   C
*/

export const getPolygon = (triangle, p, order, polygons, triangles, tokens) => {
  const parity = triangle.parity
  const intx = order % 2 ? intersect : (a, b) => intersect(b, a)
  triangle = [...triangle]
  polygons[order] = polygons[order] || []
  triangles[order] = triangles[order] || []
  tokens[order] = tokens[order] || {}

  const vertices = []
  if (order > 0) {
    if (!reflectOn(triangle, 2, order, true, tokens)) {
      return
    }
  } else {
    tokens[order][getToken(triangle)] = true
  }

  let center
  if (!curvature) {
    center = [...triangle[2]]
    vertices.push([...triangle[1]])
    vertices.push([...triangle[0]])
  } else {
    center = intx(triangle[0], triangle[1])
    vertices.push(intx(triangle[0], triangle[2]))
    vertices.push(intx(triangle[2], triangle[1]))
  }

  const rootEdges = [...triangle]
  rootEdges.parity = 1 - parity
  triangles[order].push(rootEdges)

  for (let n = 0; n < p * 2 - 1; n++) {
    reflectOn(triangle, (n + 1) % 2, order, false, tokens)
    if (!curvature) {
      vertices.push([...triangle[(n + 1) % 2]])
    } else {
      vertices.push(intx(triangle[2], triangle[n % 2]))
    }
    const subEdges = [...triangle]
    subEdges.parity = n % 2 === 0 ? parity : 1 - parity
    triangles[order].push(subEdges)
  }

  const polygon = {
    vertices,
    center,
    order,
    parity,
  }
  polygons[order].push(polygon)
  return polygon
}

const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset

  const cxt = Math.cosh(Math.asinh(xt))
  const cyt = Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt
}

const ellipticTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset
  const cxt = Math.cos(Math.asin(xt))
  const cyt = Math.cos(Math.asin(yt))
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

export const perp = (w, a, b) => {
  if (curvature === 0) {
    if (a[0] === b[0]) {
      return [0, w[1], 0]
    }
    const alpha = (b[1] - a[1]) / (b[0] - a[0])
    const alpha2 = alpha * alpha
    const nr = 1 / (1 + alpha2)
    return [
      nr * (alpha2 * a[0] + alpha * (w[1] - a[1]) + w[0]),
      nr * (alpha2 * w[1] + alpha * (w[0] - a[0]) + a[1]),
      0,
    ]
  } else {
    return intersect(normalize(cross(a, w), 1), a)
  }
}
