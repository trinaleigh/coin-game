import React, { PropTypes } from 'react'

const Player = ({ x, y }) => {
	return (
	<div id="player"
		style={{
 			left: x*40 + 'px',
  			top: y*40 + 'px'
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