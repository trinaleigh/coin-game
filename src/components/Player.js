import React, { PropTypes } from 'react'

const Player = ({ x, y }) => {
	return (
	<div id="player"
		style={{
 			left: x*20 + 'px',
  			top: y*20 + 'px'
		}}
	>
	</div>
	)
}

Player.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired
}

export default Player