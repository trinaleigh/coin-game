import React, { PropTypes } from 'react'

const Score = ({ score }) => (
	<div id="scoreboard">
		<p id="score">{score}</p>
		<p>SCORE</p>
	</div>
)

Score.propTypes = {
	score: PropTypes.number.isRequired
}

export default Score