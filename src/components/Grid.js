import React, { PropTypes } from 'react'
import Player from './Player.js'
import Coin from './Coin.js'

const Grid = ({ x, y, direction, coins }) => (
	<div id="grid">
		{coins.map(coin =>
			<Coin
				x={coin.x}
				y={coin.y}
				value={coin.value}
			/>
		)}
		<Player
			x={x}
			y={y}
			direction={direction}
		/>
	</div>
)

Grid.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	direction: PropTypes.number.isRequired,
	coins: PropTypes.array.isRequired
}

export default Grid