import React, { PropTypes } from 'react'

const Countdown = ({ remaining }) => (
	<div className="info">
		<p className="focus-value">{remaining}</p>
		<p>SECONDS</p>
	</div>
)

Countdown.propTypes = {
	remaining: PropTypes.number.isRequired
}

export default Countdown