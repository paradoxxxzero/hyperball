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

export const cross = ([xa, ya, za], [xb, yb, zb], c = curvature) => [
  ya * zb - za * yb,
  za * xb - xa * zb,
  c * (xa * yb - ya * xb),
]

export const intersect = (a, b) => normalize(cross(a, b))

export const bisect = (a, b) => {
  // const ab = [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  // return normalize(cross(ab, cross(a, b)), 1)
  if (curvature < 0) {
    const ab = [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
    return normalize(ab, 1)
  }
  const halfab = [0.5 * (a[0] + b[0]), 0.5 * (a[1] + b[1]), 0.5 * (a[2] + b[2])]
  return intersect(cross(a, b), halfab)
}

export const vec = ([xa, ya, za], [xb, yb, zb]) => [xb - xa, yb - ya, zb - za]

export const inTriangle = (P, A, B, C) => {
  if (!curvature) {
    const AP = vec(A, P)
    const BP = vec(B, P)
    const CP = vec(C, P)
    const AB = vec(A, B)
    const BC = vec(B, C)
    const CA = vec(C, A)

    const ABAP = cross(AB, AP, 1)[2]
    const BCBP = cross(BC, BP, 1)[2]
    const CACP = cross(CA, CP, 1)[2]
    return (
      Math.sign(ABAP) === Math.sign(BCBP) && Math.sign(BCBP) === Math.sign(CACP)
    )
  }
  return dot(A, P) <= 0 && dot(B, P) <= 0 && curvature * dot(C, P) >= 0
}
const flip = ([x, y, z]) => (curvature > 0 ? [-x, -y, -z] : [x, y, z])

export const incenter = (A, B, C) => {
  if (!curvature) {
    const a = Math.sqrt(dot(vec(B, C), vec(B, C)))
    const b = Math.sqrt(dot(vec(A, C), vec(A, C)))
    const c = Math.sqrt(dot(vec(A, B), vec(A, B)))
    const [xa, ya, za] = A
    const [xb, yb, zb] = B
    const [xc, yc, zc] = C
    const nr = 1 / (a + b + c)
    return [
      nr * (a * xa + b * xb + c * xc),
      nr * (a * ya + b * yb + c * yc),
      nr * (a * za + b * zb + c * zc),
    ]
  }
  return intersect(bisect(A, B), bisect(B, flip(C)))
}

export const bisectorOpposites = (A, B, C) => {
  if (!curvature) {
    const AB = vec(A, B)
    const BC = vec(B, C)
    const CA = vec(C, A)
    const a = Math.sqrt(dot(BC, BC))
    const b = Math.sqrt(dot(CA, CA))
    const c = Math.sqrt(dot(AB, AB))
    const [xa, ya, za] = A
    const [xb, yb, zb] = B
    const [xc, yc, zc] = C
    const nra = 1 / (b + c)
    const nrb = 1 / (a + c)
    const nrc = 1 / (a + b)

    return [
      [
        nra * b * xb + nra * c * xc,
        nra * b * yb + nra * c * yc,
        nra * b * zb + nra * c * zc,
      ],
      [
        nrb * a * xa + nrb * c * xc,
        nrb * a * ya + nrb * c * yc,
        nrb * a * za + nrb * c * zc,
      ],
      [
        nrc * a * xa + nrc * b * xb,
        nrc * a * ya + nrc * b * yb,
        nrc * a * za + nrc * b * zb,
      ],
    ]
  }
  return [
    intersect(C, bisect(A, B)),
    intersect(A, bisect(flip(B), C)),
    intersect(B, bisect(C, flip(A))),
  ]
}

export const intersectPlane = (A, B, C, D) => {
  const a = (B[1] - A[1]) / (B[0] - A[0])
  const b = B[1] - a * B[0]
  const c = (D[1] - C[1]) / (D[0] - C[0])
  const d = D[1] - c * D[0]
  if (B[0] === A[0]) {
    return [A[0], d, 0]
  }
  if (D[0] === C[0]) {
    return [C[0], b, 0]
  }
  const x = (d - b) / (a - c)
  return [x, a * x + b, 0]
}

export const intersectTriangleByincenter = (P, A, B, C) => {
  if (!curvature) {
    const I = incenter(A, B, C)
    const IP = vec(I, P)
    const AB = vec(A, B)
    const BC = vec(B, C)
    const CA = vec(C, A)

    let X = intersectPlane(A, B, I, P)
    const AX = vec(A, X)
    let IX = vec(I, X)
    let d = dot(AB, AX)
    if (d >= 0 && d <= dot(AB, AB) && dot(IP, IX) > 0) {
      return X
    }
    X = intersectPlane(B, C, I, P)
    const BX = vec(B, X)
    IX = vec(I, X)
    d = dot(BC, BX)
    if (d >= 0 && d <= dot(BC, BC) && dot(IP, IX) > 0) {
      return X
    }
    X = intersectPlane(C, A, I, P)
    const CX = vec(C, X)
    IX = vec(I, X)
    d = dot(CA, CX)
    if (d >= 0 && d <= dot(CA, CA) && dot(IP, IX) > 0) {
      return X
    }
  }
  const I = incenter(A, B, C)
  const IP = normalize(cross(I, P), 1)
  const dAP = dot(A, P) >= 0
  const dBP = dot(B, P) >= 0
  const dCP = curvature * dot(C, P) <= 0
  const dbAP = curvature * dot(bisect(B, flip(C)), P) <= 0
  const dbBP = curvature * dot(bisect(flip(C), A), P) <= 0
  const dbCP = dot(bisect(A, flip(B)), P) >= 0

  if (dCP && ((!dAP && !dBP) || (dBP && !dbAP) || (dAP && dbBP))) {
    return intersect(flip(C), IP)
  }
  if (dBP && ((!dAP && !dCP) || (dCP && dbAP) || (dAP && !dbCP))) {
    return intersect(B, IP)
  }
  return intersect(A, IP)
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
  const j = (i + 1) % 3
  const k = (i + 2) % 3
  const newTriangle = [[], [], [], []]
  if (curvature === 0) {
    const reflector = [
      triangle[k][0] - triangle[j][0],
      triangle[k][1] - triangle[j][1],
      triangle[k][2] - triangle[j][2],
    ]
    newTriangle[i] = reflect(
      [
        triangle[j][0] - triangle[i][0],
        triangle[j][1] - triangle[i][1],
        triangle[j][2] - triangle[i][2],
      ],
      reflector
    )
    newTriangle[i][0] += triangle[j][0]
    newTriangle[i][1] += triangle[j][1]
    newTriangle[i][2] += triangle[j][2]

    newTriangle[j][0] = triangle[j][0]
    newTriangle[j][1] = triangle[j][1]
    newTriangle[j][2] = triangle[j][2]
    newTriangle[k][0] = triangle[k][0]
    newTriangle[k][1] = triangle[k][1]
    newTriangle[k][2] = triangle[k][2]
    // wythoff
    newTriangle[3] = reflect(
      [
        triangle[j][0] - triangle[3][0],
        triangle[j][1] - triangle[3][1],
        triangle[j][2] - triangle[3][2],
      ],
      reflector
    )
    newTriangle[3][0] += triangle[j][0]
    newTriangle[3][1] += triangle[j][1]
    newTriangle[3][2] += triangle[j][2]
    newTriangle[4] = reflect(
      [
        triangle[j][0] - triangle[4][0],
        triangle[j][1] - triangle[4][1],
        triangle[j][2] - triangle[4][2],
      ],
      reflector
    )
    newTriangle[4][0] += triangle[j][0]
    newTriangle[4][1] += triangle[j][1]
    newTriangle[4][2] += triangle[j][2]
    newTriangle[5] = reflect(
      [
        triangle[j][0] - triangle[5][0],
        triangle[j][1] - triangle[5][1],
        triangle[j][2] - triangle[5][2],
      ],
      reflector
    )
    newTriangle[5][0] += triangle[j][0]
    newTriangle[5][1] += triangle[j][1]
    newTriangle[5][2] += triangle[j][2]
    newTriangle[6] = reflect(
      [
        triangle[j][0] - triangle[6][0],
        triangle[j][1] - triangle[6][1],
        triangle[j][2] - triangle[6][2],
      ],
      reflector
    )
    newTriangle[6][0] += triangle[j][0]
    newTriangle[6][1] += triangle[j][1]
    newTriangle[6][2] += triangle[j][2]
  } else {
    newTriangle[j] = reflect(triangle[j], triangle[i])
    newTriangle[k] = reflect(triangle[k], triangle[i])
    // TODO: Needed ?
    const wyt = triangle[3]
    let wytj = normalize(cross(triangle[j], wyt), 1)
    let wytk = normalize(cross(triangle[k], wyt), 1)
    wytj = reflect(wytj, triangle[i])
    wytk = reflect(wytk, triangle[i])
    newTriangle[3] = intersect(wytj, wytk)

    newTriangle[4] = reflect(triangle[4], triangle[i])
    newTriangle[5] = reflect(triangle[5], triangle[i])
    newTriangle[6] = reflect(triangle[6], triangle[i])

    newTriangle[i][0] = -triangle[i][0]
    newTriangle[i][1] = -triangle[i][1]
    newTriangle[i][2] = -triangle[i][2]
  }

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
    (curvature * (Math.cos(pAngle) * Math.cos(qAngle) + Math.cos(rAngle))) /
    Math.sin(pAngle)
  const b = curvature * Math.cos(qAngle)
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
  polygons[order] = polygons[order] || []
  triangles[order] = triangles[order] || []
  tokens[order] = tokens[order] || {}

  const vertices = []
  const wythoffs = []
  if (order > 0) {
    if (!(triangle = reflectOn(triangle, 2, order, true, tokens))) {
      return
    }
  } else {
    tokens[order][getToken(triangle)] = true
  }

  let center
  if (!curvature) {
    center = [...triangle[2]]
    vertices.push([...triangle[1]], [...triangle[0]])
    wythoffs.push([
      [...triangle[3]],
      [...triangle[4]],
      [...triangle[5]],
      [...triangle[6]],
    ])
  } else {
    center = intx(triangle[0], triangle[1])
    vertices.push(
      intx(triangle[0], triangle[2]),
      intx(triangle[2], triangle[1])
    )
    wythoffs.push([
      [...triangle[3].map(x => (curvature <= 0 || order % 2 ? x : -x))],
      intx(triangle[4], triangle[0]),
      intx(triangle[5], triangle[1]),
      intx(triangle[6], triangle[2]),
    ])
  }

  const rootEdges = [...triangle]
  rootEdges.parity = 1 - parity
  triangles[order].push(rootEdges)

  for (let n = 0; n < p * 2 - 1; n++) {
    triangle = reflectOn(triangle, (n + 1) % 2, order, false, tokens)
    if (!curvature) {
      vertices.push([...triangle[(n + 1) % 2]])
      wythoffs.push([
        [...triangle[3]],
        [...triangle[4]],
        [...triangle[5]],
        [...triangle[6]],
      ])
    } else {
      vertices.push(intx(triangle[2], triangle[n % 2]))
      wythoffs.push([
        [
          ...triangle[3].map(x =>
            curvature <= 0 || n % 2 !== order % 2 ? x : -x
          ),
        ],
        intx(triangle[n % 2 ? 4 : 0], triangle[n % 2 ? 0 : 4]),
        intx(triangle[n % 2 ? 5 : 1], triangle[n % 2 ? 1 : 5]),
        intx(triangle[n % 2 ? 6 : 2], triangle[n % 2 ? 2 : 6]),
      ])
    }
    const subEdges = [...triangle]
    subEdges.parity = n % 2 === 0 ? parity : 1 - parity
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

export const perps = (w, triangle) => {
  const perps = [w]
  for (let i = 0; i < 3; i++) {
    const a = triangle[i]

    if (curvature === 0) {
      const b = triangle[(i + 1) % 3]
      if (a[0] === b[0]) {
        perps.push([0, w[1], 0])
        continue
      }
      const alpha = (b[1] - a[1]) / (b[0] - a[0])
      const alpha2 = alpha * alpha
      const nr = 1 / (1 + alpha2)
      perps.push([
        nr * (alpha2 * a[0] + alpha * (w[1] - a[1]) + w[0]),
        nr * (alpha2 * w[1] + alpha * (w[0] - a[0]) + a[1]),
        0,
      ])
    } else {
      perps.push(normalize(cross(a, w), 1))
    }
  }
  return perps
}
