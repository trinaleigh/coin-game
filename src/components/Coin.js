import React, { PropTypes } from 'react'

const Coin = ({ x, y }) => {
	return (
	<div className="coin"
		style={{
 			left: x*40 + 'px',
  			top: y*40 + 'px'
		}}
	>
	</div>
	)
}

Coin.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired
}

export default Coin