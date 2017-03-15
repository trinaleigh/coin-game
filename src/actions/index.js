export const addCoin = (points) => {
	return {
		type: 'ADD_COIN',
		points
	}
}

export const movePlayer = (xClick,yClick) => {
	// convert click position to move (dx, dy)
	let dx = 0, dy = 0
	if (xClick <= 0.125) {
		dx = -1
	} else if (xClick >= 0.875) {
		dx = 1
	}

	if (yClick <= 0.125) {
		dy = -1
	} else if (yClick >= 0.875) {
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