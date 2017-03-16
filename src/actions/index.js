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

export const resetBoard = () => {
	return {
		type: 'RESET_BOARD'
	}
}

export const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

export const resetClock = () => {
	return {
		type: 'RESET_CLOCK'
	}
}