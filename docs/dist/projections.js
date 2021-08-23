export const poincare = ([x, y, z], c) => {
  // z = -c
  if (c <= 0 || z < 1) {
    const nr = 1 / (1 - c * z)
    return [x * nr, y * nr]
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
  const p = poincare([x, y, z], c)
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
  // 4 * Math.PI * arctanh(z)
  const p = poincare([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const k = 4 * Math.PI * 0.5
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}

export const half = ([x, y, z], c) => {
  //
  const p = poincare([x, y, z], c)
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
  const p = poincare([x, y, z], c)
  if (!p) {
    return
  }
  const [X, Y] = p
  const nr = 1 / (2 * (X * X + Y * Y))

  return [X * (0.5 + nr), Y * (0.5 - nr)]
}

export const projections = {
  poincare,
  klein,
  inverted,
  lambert,
  twilight,
  spiral,
  band,
  half,
  orthographic,
  joukowsky,
  latlng,
  mercator,
  // test,
}
