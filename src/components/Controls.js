import React, { PropTypes } from 'react'
import Grid from './Grid.js'

const Controls = ({ x, y, coins, translate }) => (
  <div id="controls" onClick={translate}>
      <Grid
        x={x}
        y={y}
        coins={coins}
      />
  </div>
)

Grid.propTypes = {
	translate: PropTypes.func.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	coins: PropTypes.array.isRequired
}

export default Controls