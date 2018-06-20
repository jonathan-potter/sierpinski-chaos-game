const { atan2, cos, PI: pi, random, sin, sqrt } = Math

export const randomVelocity = (maxSpeed = 1) => {
  const direction = random() * 2 * pi
  const speed = random() * maxSpeed

  return {
    x: speed * cos(direction),
    y: speed * sin(direction)
  }
}

export const dot = (vector1, vector2) => {
  return vector1.x * vector2.x + vector1.y * vector2.y
}

export const magnitude = vector => {
  const { x, y } = vector

  return sqrt(x * x + y * y)
}

export const argument = vector => {
  return atan2(vector.y, vector.x)
}

export const normalize = vector => {
  const { x, y } = vector
  const mag = magnitude(vector)

  return {
    x: x / mag,
    y: y / mag
  }
}

export const middlePoint = (vector1, vector2) => ({
  x: (vector1.x + vector2.x) / 2,
  y: (vector1.y + vector2.y) / 2
})

export const add = (vector1, vector2) => ({
  x: vector1.x + vector2.x,
  y: vector1.y + vector2.y
})

export const subtract = (vector1, vector2) => ({
  x: vector1.x - vector2.x,
  y: vector1.y - vector2.y
})

export const scalarMultiply = (vector, scalar) => ({
  x: vector.x * scalar,
  y: vector.y * scalar
})

export const reverse = vector => ({
  x: -vector.x,
  y: -vector.y
})

export const rotate = (vector, angle) => {
  const mag = magnitude(vector)
  const arg = argument(vector)

  return {
    x: mag * cos(arg + angle),
    y: mag * sin(arg + angle)
  }
}
