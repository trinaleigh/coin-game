import React, { PropTypes } from 'react'

const Score = ({ score }) => (
	<div className="info">
		<p className="focus-value">{score}</p>
		<p>SCORE</p>
	</div>
)

Score.propTypes = {
	score: PropTypes.number.isRequired
}

export default Score