import React, { PropTypes } from 'react'
import Player from './Player.js'
import Coin from './Coin.js'

const Grid = ({ x, y, coins }) => (
  <div id="grid">
      {coins.map(coin =>
        <Coin
          x={coin.x}
          y={coin.y}
        />
      )}
      <Player
        x={x}
        y={y}
      />
  </div>
)

Grid.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	coins: PropTypes.array.isRequired
}

export default Grid