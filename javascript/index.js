import Draw from 'classes/Draw'
import Location from 'classes/Location'
import sample from 'lodash/sample'

import 'css/header.scss'
import 'css/app.scss'

const { requestAnimationFrame } = window

const anchors = [
  Location.random(),
  Location.random(),
  Location.random()
]

const location = Location.random()

function drawStuff () {
  Draw.clearScreen()

  anchors.forEach(anchor => anchor.move())

  for (let i = 0; i < 1000; i++) {
    const anchor = sample(anchors)

    location.approach(anchor)

    Draw.circle(location)
  }

  requestAnimationFrame(drawStuff)
}

drawStuff()
