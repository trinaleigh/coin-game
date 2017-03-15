export const addCoin = (points) => {
	return {
		type: 'ADD_COIN',
		points
	}
}

export const movePlayer = (xClick,yClick) => {
	// convert click position to move (dx, dy)
	let dx = 0, dy = 0
	if (xClick <= 100) {
		dx = -1
	} else if (xClick >= 400) {
		dx = 1
	}

	if (yClick <= 100) {
		dy = -1
	} else if (yClick >= 400) {
		dy = 1
	}

	return {
		type: 'MOVE_PLAYER',
		dx,
		dy
	}
}

export const updateScreen = (coords) => {
	return {
		type: 'UPDATE_SCREEN',
		coords
  }
}