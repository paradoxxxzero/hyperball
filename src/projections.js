import { ellipticFi } from '../elliptic'
export const poincare = ([x, y, z], c) => {
  // z = -c
  if (c <= 0 || z < 1) {
    const nr = 1 / (1 - c * z)
    return [x * nr, y * nr]
  }
}

const rootCircle = ([x, y, z], c) => {
  if (c > 0) {
    return orthographic([x, y, z], c)
  } else if (c == 0) {
    // Make it more interesting
    x /= 8
    y /= 8
    if (Math.sqrt(x * x + y * y) <= 1) {
      return [x, y]
    }
  } else {
    return poincare([x, y, z], c)
  }
}
export const klein = ([x, y, z], c) => {
  // z = 0
  if (c <= 0 || z > 0) {
    const nr = 1 / z
    return [x * nr, y * nr]
  }
}

export const orthographic = ([x, y, z], c) => {
  // No z
  if (c <= 0 || z < 0) {
    return [x, y]
  }
}

export const inverted = ([x, y, z], c) => {
  // z = c
  const nr = 1 / (1 + c * z)
  return [x * nr, y * nr]
}

export const lambert = ([x, y, z], c) => {
  const nr = Math.sqrt(2 / (1 - c * z))
  return [x * nr, y * nr]
}

export const spiral = ([x, y, z], c) => {
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const r = Math.sqrt(X * X + Y * Y)
  const t = Math.atan2(Y, X)
  return [r * Math.cos(t + Math.PI * r), r * Math.sin(t + Math.PI * r)]
}

const gnonomic = (p, [x, y, z], c) => {
  if (c <= 0 || z <= 1 / p) {
    const nr = 1 / (p - c * z)
    return [x * nr, y * nr]
  }
}

export const twilight = ([x, y, z], c) => {
  return gnonomic(1.4, [x, y, z], c)
}

export const james = ([x, y, z], c) => {
  return gnonomic(1.5, [x, y, z], c)
}

export const lahire = ([x, y, z], c) => {
  return gnonomic(1.7071067812, [x, y, z], c)
}

// export const test = ([x, y, z], c) => {
//   return gnonomic(1.1, [x, y, z], c)
// }

export const latlng = ([x, y, z], c) => {
  let lat = Math.PI / 2 - Math[c > 0 ? 'acos' : 'acosh'](z)
  let lng = Math.atan2(x, y)
  if (Math.abs(lat) < (0.7 * Math.PI) / 2 && Math.abs(lng) < 0.8 * Math.PI) {
    return [lng, lat]
  }
}

export const mercator = ([x, y, z], c) => {
  const l = latlng([x, y, z], c)
  if (!l) {
    return
  }
  const [lng, lat] = l
  return [lng, Math.log(Math.tan(Math.PI / 4 + lat / 2))]
}

export const band = ([x, y, z], c) => {
  // 4 / Math.PI * arctanh(z)
  // = 2 / Math.PI * ln((1 + z)/(1 - z))
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const k = 2 / Math.PI
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}
export const ring = ([x, y, z], c) => {
  // e^(i2π(z+i) / kP)
  const p = band([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const kP = 8 * 1.1221997046783607 // This only works for 6, 4, 2 centered

  const exp = Math.exp(-(2 * Math.PI * (Y + 1)) / kP)

  return [
    exp * Math.sin((2 * Math.PI * X) / kP),
    -exp * Math.cos((2 * Math.PI * X) / kP),
  ]
}

export const bandring = ([x, y, z], c) => {
  const p = ring([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const k = 2 / Math.PI
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}

export const half = ([x, y, z], c) => {
  //
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const X2 = X * X
  const Y1 = Y - 1
  const k = -1 / (X2 + Y1 * Y1)
  return [2 * X * k, (X2 + Y1 * (Y + 1)) * k]
}

export const joukowsky = ([x, y, z], c) => {
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const nr = 1 / (2 * (X * X + Y * Y))

  return [X * (0.5 + nr), Y * (0.5 - nr)]
}

export const heart = ([x, y, z], c) => {
  // z² + z
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  let [Y, X] = p
  X *= -1
  return [2 * X * Y + 2 * Y, -(X * X - Y * Y + 2 * X - 0.75)]
}

export const teardrop = ([x, y, z], c) => {
  // 1 - sqrt(1 + z)
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  let [Y, X] = p
  X *= -1
  return [
    Math.sign(Y) *
      Math.sqrt((Math.sqrt((1 + X) * (1 + X) + Y * Y) - (1 + X)) / 2),
    -(Math.sqrt((Math.sqrt((1 + X) * (1 + X) + Y * Y) + (1 + X)) / 2) - 0.75),
  ]
}

export const squareStretch = ([x, y, z], c) => {
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const X2 = X * X
  const Y2 = Y * Y
  const d = Math.sqrt(X2 + Y2)

  return [
    X2 >= Y2 ? Math.sign(X) * d : ((Math.sign(Y) * X) / Y) * d,
    X2 >= Y2 ? ((Math.sign(X) * Y) / X) * d : Math.sign(Y) * d,
  ]
}

export const squircular = ([x, y, z], c) => {
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const X2 = X * X
  const Y2 = Y * Y
  const k = Math.sign(X * Y) / Math.SQRT2
  const h = Math.sqrt(X2 + Y2 - Math.sqrt((X2 + Y2) * (X2 + Y2 - 4 * X2 * Y2)))

  return [(k / Y) * h, (k / X) * h]
}

export const squareElliptical = ([x, y, z], c) => {
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const X2 = X * X
  const Y2 = Y * Y

  return [
    0.5 *
      (Math.sqrt(2 + X2 - Y2 + 2 * Math.SQRT2 * X) -
        Math.sqrt(2 + X2 - Y2 - 2 * Math.SQRT2 * X)),
    0.5 *
      (Math.sqrt(2 - X2 + Y2 + 2 * Math.SQRT2 * Y) -
        Math.sqrt(2 - X2 + Y2 - 2 * Math.SQRT2 * Y)),
  ]
}

// https://arxiv.org/pdf/1509.06344.pdf
export const square = ([x, y, z], c) => {
  // Re((1 - i) / -Ke * F(acos((1 + i) / sqrt(2) * (x + iy)), 1 / sqrt(2))) + 1
  // Im((1 - i) / -Ke * F(acos((1 + i) / sqrt(2) * (x + iy)), 1 / sqrt(2))) - 1
  const p = rootCircle([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const Ke = 1.854
  const iKe = -1 / Ke

  // (1 + i) / sqrt(2) * (x + iy)
  const ax = (X - Y) / Math.SQRT2
  const ay = (X + Y) / Math.SQRT2

  // acos(x + iy) = -i * ln(x + iy + sqrt((x + iy) * (x + iy) - 1))

  const sqfx = ax * ax - ay * ay - 1
  const sqfy = 2 * ax * ay

  // sqrt(x + iy) = sqrt((sqrt(x² + y²) + x) / 2) + i * sign(y) * sqrt((sqrt(x² + y²) - x) / 2)

  const sqx = Math.sqrt((Math.sqrt(sqfx * sqfx + sqfy * sqfy) + sqfx) / 2)
  const sqy =
    Math.sign(sqfy) *
    Math.sqrt((Math.sqrt(sqfx * sqfx + sqfy * sqfy) - sqfx) / 2)

  const lax = ax + sqx
  const lay = ay + sqy

  // ln(x + iy) = ln(sqrt(x² + y²)) - i * atan2(y, x)

  const acx = -Math.atan2(lay, lax)
  const acy = -Math.log(Math.sqrt(lax * lax + lay * lay))

  const [ex, ey] = ellipticFi(acx, acy, 1 / 2)

  const [Rx, Ry] = [iKe * (ex + ey), iKe * (ey - ex)]

  // WHY?
  const [rx, ry] = Rx < Ry ? [-Rx, -Ry] : [Rx, Ry]
  const [crx, cry] = [rx - 1, ry + 1]

  return Rx < -Ry ? [crx, cry] : [cry, crx]
}
export const projections = {
  poincare,
  klein,
  inverted,
  lambert,
  twilight,
  spiral,
  band,
  bandring,
  ring,
  half,
  heart,
  teardrop,
  orthographic,
  joukowsky,
  latlng,
  mercator,
  square,
  // test,
}
