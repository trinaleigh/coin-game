import React, { PropTypes } from 'react'
import Grid from './Grid.js'
import Reset from '../containers/Reset.js'
import Scoreboard from './Scoreboard.js'
import Countdown from './Countdown.js'

const Controls = ({ x, y, coins, score, highScore, translate, remaining}) => (
	<div className="controls">
		<div>
			<p id="record">HIGH SCORE: {highScore}</p>
			<div id="play-area">	
				<div id="border" onClick={translate}>
				  <Grid
				    x={x}
				    y={y}
				    coins={coins}
				  />
				</div>
				<Reset/>
			</div>
		</div>
		<div id="trackers">
			<Scoreboard
			  score={score}
			/>
			<Countdown
			remaining={remaining}
			/>
		</div>
	</div>
)

Controls.propTypes = {
	translate: PropTypes.func.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	coins: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}

export default Controls