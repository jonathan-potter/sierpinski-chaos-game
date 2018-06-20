import { canvasDimensions } from 'classes/Draw'
import { randomVelocity } from 'classes/Vector'

const { random } = Math

export default class Location {
  constructor ({ x = 0, y = 0, velocity }) {
    this.x = x
    this.y = y
    this.velocity = velocity
  }

  move () {
    const { x, y } = this
    const { x: dx, y: dy } = this.velocity

    this.x = x + dx
    this.y = y + dy

    this.bounce()
  }

  bounce () {
    const { width: canvasWidth, height: canvasHeight } = canvasDimensions()
    const dimension = this.outOfBoundsDimension()

    if (dimension === '-x') {
      this.x = -this.x
      this.velocity.x = -this.velocity.x
    }
    if (dimension === '-y') {
      this.y = -this.y
      this.velocity.y = -this.velocity.y
    }
    if (dimension === 'x') {
      this.x = 2 * canvasWidth - this.x
      this.velocity.x = -this.velocity.x
    }
    if (dimension === 'y') {
      this.y = 2 * canvasHeight - this.y
      this.velocity.y = -this.velocity.y
    }
  }

  approach (location) {
    this.x = (this.x + location.x) / 2
    this.y = (this.y + location.y) / 2
  }

  outOfBoundsDimension () {
    const { width: canvasWidth, height: canvasHeight } = canvasDimensions()
    const { x, y } = this

    if (x < 0) { return '-x' }
    if (y < 0) { return '-y' }
    if (x > canvasWidth) { return 'x' }
    if (y > canvasHeight) { return 'y' }
  }

  static random () {
    const { width: canvasWidth, height: canvasHeight } = canvasDimensions()

    const x = canvasWidth * random()
    const y = canvasHeight * random()
    const velocity = randomVelocity(5)

    return new Location({ x, y, velocity })
  }
}
