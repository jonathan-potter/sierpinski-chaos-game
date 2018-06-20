import throttle from 'lodash/throttle'

const { PI: pi } = Math

let canvas = document.getElementsByTagName('canvas')[0]
let context = canvas.getContext('2d')

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

export const canvasDimensions = () => ({
  width: canvas.width,
  height: canvas.height
})

function onResize () {
  canvas = document.getElementsByTagName('canvas')[0]

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight - 60

  context = canvas.getContext('2d')
}

window.addEventListener('resize', throttle(onResize, 50))

onResize()
