import React, { PropTypes } from 'react'

const Coin = ({ x, y }) => {
	return (
	<div className="coin"
		style={{
 			left: x*10 + '%',
  			top: y*10 + '%'
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