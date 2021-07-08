export const poincare = ([x, y, z]) => {
  // z = 1
  const nr = 1 / (1 + z)
  return [x * nr, y * nr]
}

export const klein = ([x, y, z]) => {
  // z = 0
  const nr = 1 / z
  return [x * nr, y * nr]
}

export const orthographic = ([x, y]) => {
  // No z
  return [x, y]
}

export const inverted = ([x, y, z]) => {
  // z = -1
  const nr = 1 / (-1 + z)
  return [x * nr, y * nr]
}

export const band = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poincare([x, y, z])
  const k = 4 * Math.PI * 0.5
  const d1 = (1 + X) * (1 + X) + Y * Y
  const d2 = (1 - X) * (1 - X) + Y * Y
  return [
    k * (Math.log(Math.sqrt(d1)) - Math.log(Math.sqrt(d2))),
    k * (Math.atan2(Y, 1 + X) - Math.atan2(-Y, 1 - X)),
  ]
}

export const half = ([x, y, z]) => {
  // 4 * Math.PI * arctanh(z)
  const [X, Y] = poincare([x, y, z])
  const X2 = X * X
  const Y1 = Y - 1
  const k = -1 / (X2 + Y1 * Y1)
  return [2 * X * k, (X2 + Y1 * (Y + 1)) * k]
}

export const joukowsky = ([x, y, z]) => {
  const [X, Y] = poincare([x, y, z])
  const nr = 1 / (2 * (X * X + Y * Y))

  return [X * (0.5 + nr), Y * (0.5 - nr)]
}

export const stereographic = ([x, y, z]) => {
  // z = 0
  const nr = 1 / (1 - z)
  return [x * nr, y * nr]
}

export const projections = {
  poincare: poincare,
  klein: klein,
  inverted: inverted,
  band: band,
  half: half,
  orthographic: orthographic,
  joukowsky: joukowsky,
  stereographic: stereographic,
}
