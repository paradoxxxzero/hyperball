const fromDisk = ([x, y]) => [(x - w2) / radius, (h2 - y) / radius]

const poincareToHyperboloid = ([x, y]) => {
  const s = x * x + y * y
  const nr = 1 / 1 - s
  return [2 * x * nr, 2 * y * nr, (1 + s) * nr]
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

const getPoincareBezierControl = (x1, y1, x2, y2) => {
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

//

const testLine = () => {
  // H x² + y² - z² = -1
  const ux = 0.5
  const uy = 1
  const vx = -0.75
  const vy = 1
  const u = [ux, uy, Math.sqrt(ux * ux + uy * uy + 1)]
  const v = [vx, vy, Math.sqrt(vx * vx + vy * vy + 1)]
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = 'black'
  ctx.ellipse(w2, h2, radius, radius, 0, 0, 2 * Math.PI)
  ctx.fill()
  const pr = 6
  ctx.fillStyle = 'red'
  const [upx, upy] = toDisk(fromHyperboloid(u))
  ctx.fillRect(upx - pr / 2, upy - pr / 2, pr, pr)
  ctx.fillStyle = 'blue'
  const [vpx, vpy] = toDisk(fromHyperboloid(v))
  ctx.fillRect(vpx - pr / 2, vpy - pr / 2, pr, pr)
  ctx.beginPath()
  ctx.moveTo(upx, upy)
  ctx.strokeStyle = 'green'
  const v1 = fromHyperboloid(u)
  const v2 = fromHyperboloid(v)
  const [x1, y1, x2, y2] = getPoincareBezierControl(v1[0], v1[1], v2[0], v2[1])
  const p1 = toDisk([x1, y1])
  const p2 = toDisk([x2, y2])
  const vv2 = toDisk(v2)
  ctx.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], vv2[0], vv2[1])
  ctx.stroke()
  ctx.strokeStyle = 'cyan'
  ctx.beginPath()
  ctx.moveTo(upx, upy)
  line(u, v)
  const ab = u[0] * v[0] + u[1] * v[1] - u[2] * v[2]
  const ab2 = ab * ab
  const t2s = t => Math.sqrt(t * t * (ab2 - 1) + 1) + ab * t
  let last = [upx, upy]
  const ds = []
  for (let i = 0.999; i > 0; i -= 0.01) {
    const t = i // Math.atanh(i ** 2) / 100 // i ** 7
    // if (t > 0.005) continue
    const s = t2s(t)
    const T = [
      //
      u[0] * t + v[0] * s,
      u[1] * t + v[1] * s,
      u[2] * t + v[2] * s,
    ]
    let pt = toDisk(fromHyperboloid(T))
    let d = (last[0] - pt[0]) ** 2 + (last[1] - pt[1]) ** 2
    ds.push(d)
    ctx.lineTo(...pt)
    last = pt
  }
  console.log(ds.length, ds.reduce((a, b) => a + b, 0) / ds.length)
  ctx.lineTo(vpx, vpy)
  ctx.stroke()
}
