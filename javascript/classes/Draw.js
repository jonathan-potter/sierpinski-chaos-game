const { PI: pi } = Math

const canvas = document.getElementsByTagName('canvas')[0]
const context = canvas.getContext('2d')

export default {
  circle ({ x, y, radius = 0.5 }) {
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.beginPath()

    context.arc(
        x,      // the x position
        y,      // the y position
        radius, // circle radius
        0,      // start angle
        2 * pi, // end angle
        false   // counter-clockwise
    )

    context.stroke()
  },

  clearScreen () {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }
}

export const canvasDimensions = {
  width: canvas.width,
  height: canvas.height
}
