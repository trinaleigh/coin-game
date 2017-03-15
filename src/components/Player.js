import React, { PropTypes } from 'react'

const Player = ({ x, y }) => {
	return (
	<div id="player"
		style={{
 			left: x*10 + '%',
  			top: y*10 + '%'
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