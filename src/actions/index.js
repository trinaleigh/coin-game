export const addCoin = (points) => {
	return {
		type: 'ADD_COIN',
		points
	}
}

export const movePlayer = (x,y) => {
	return {
		type: 'MOVE_PLAYER',
		x,
		y
	}
}

export const updateScreen = (coords) => {
	return {
		type: 'UPDATE_SCREEN',
		coords
  }
}