import React, { PropTypes } from 'react'

const Player = ({ x, y, direction }) => {
	return (
	<div id="player"
		style={{
 			left: x*10 + '%',
  			top: y*10 + '%',
  			transform: 'rotate(' + direction + 'rad)'
		}}
	>
	</div>
	)
}

Player.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	direction: PropTypes.number.isRequired
}

export default Player