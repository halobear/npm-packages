const rotateCursor = {
  0: require('../images/rotation_0.png'),
  45: require('../images/rotation_45.png'),
  90: require('../images/rotation_90.png'),
  135: require('../images/rotation_135.png'),
  180: require('../images/rotation_180.png'),
  '-45': require('../images/rotation2_45.png'),
  '-90': require('../images/rotation2_90.png'),
  '-135': require('../images/rotation2_135.png'),
}

function getKey(r) {
  let key = 0
  if ((r <= 0 && r >= -23) || (r >= 0 && r <= 23)) {
    key = 0
  } else if (r >= 23 && r <= 68) {
    key = 45
  } else if (r >= 68 && r <= 113) {
    key = 90
  } else if (r >= 113 && r <= 158) {
    key = 135
  } else if (r >= 158 || (r >= -180 && r <= -158)) {
    key = 180
  } else if (r >= -158 && r <= -113) {
    key = -135
  } else if (r >= -113 && r <= -68) {
    key = -90
  } else if (r >= -68 && r <= 23) {
    key = -45
  }
  return key
}

export default (r) => {
  const key = getKey(r)
  const img = rotateCursor[key]
  return `url(${img}) 11 11,pointer`
}
