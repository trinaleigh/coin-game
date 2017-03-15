import React, { PropTypes } from 'react'
import Grid from './Grid.js'

const Controls = ({ x, y, translate }) => (
  <div id="controls" onClick={translate}>
      <Grid
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

export default Controls