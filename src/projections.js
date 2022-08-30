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
  // test,
}
