import React, { PropTypes } from 'react'
import Player from './Player.js'

const Grid = ({ x, y }) => (
  <div id="grid">
      <Player
        x={x}
        y={y}
      />
  </div>
)

Grid.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Grid