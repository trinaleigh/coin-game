import React, { PropTypes } from 'react'
import Player from './Player.js'

const Grid = ({ x, y, translate }) => (
  <div id="grid" onClick={translate}>
      <Player
        x={x}
        y={y}
      />
  </div>
)

Grid.propTypes = {
  translate: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Grid