import React, { PropTypes } from 'react'
import Grid from './Grid.js'
import Scoreboard from './Scoreboard.js'

const Controls = ({ x, y, coins, score, translate }) => (
  <div className="controls">
  <div id="border" onClick={translate}>
      <Grid
        x={x}
        y={y}
        coins={coins}
      />
  </div>
  <Scoreboard
      score={score}
  />
  </div>
)

Controls.propTypes = {
	translate: PropTypes.func.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	coins: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired
}

export default Controls