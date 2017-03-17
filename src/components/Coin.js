import React, { PropTypes } from 'react'

const Coin = ({ x, y, value }) => {
	return (
	<div className="coin"
		style={{
 			left: x*10 + '%',
  			top: y*10 + '%',
  			backgroundColor: 'var(--coin' + value +')' 
		}}
	>
	</div>
	)
}

Coin.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
}

export default Coin