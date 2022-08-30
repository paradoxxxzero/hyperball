// These 2 elliptic approximation come from https://github.com/d3/d3-geo-projection

// Calculate F(phi|m) where m = k² = sin²α.
// See Abramowitz and Stegun, 17.6.7.
export const ellipticF = (phi, m) => {
  if (!m) return phi
  if (m === 1) return Math.log(Math.tan(phi / 2 + Math.PI / 4))
  var a = 1,
    b = Math.sqrt(1 - m),
    c = Math.sqrt(m)
  for (var i = 0; Math.abs(c) > 1e-6; i++) {
    if (phi % Math.PI) {
      var dPhi = Math.atan((b * Math.tan(phi)) / a)
      if (dPhi < 0) dPhi += Math.PI
      phi += dPhi + ~~(phi / Math.PI) * Math.PI
    } else phi += phi
    c = (a + b) / 2
    b = Math.sqrt(a * b)
    c = ((a = c) - b) / 2
  }
  return phi / (Math.pow(2, i) * a)
}

// Calculate F(phi+iPsi|m).
// See Abramowitz and Stegun, 17.4.11.
export const ellipticFi = (phi, psi, m) => {
  var r = Math.abs(phi),
    i = Math.abs(psi),
    sinhPsi = Math.sinh(i)
  if (r) {
    var cscPhi = 1 / Math.sin(r),
      cotPhi2 = 1 / (Math.tan(r) * Math.tan(r)),
      b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m),
      c = (m - 1) * cotPhi2,
      cotLambda2 = (-b + Math.sqrt(b * b - 4 * c)) / 2
    return [
      ellipticF(Math.atan(1 / Math.sqrt(cotLambda2)), m) * Math.sign(phi),
      ellipticF(Math.atan(Math.sqrt((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) *
        Math.sign(psi),
    ]
  }
  return [0, ellipticF(Math.atan(sinhPsi), 1 - m) * Math.sign(psi)]
}
