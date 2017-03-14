const position = (state = [0,0], action) => {
	if (action.type === 'MOVE_PLAYER') {
        return [state[0] + action.x, state[1] + action.y]
	} else {
		return state
	}
}

export default position