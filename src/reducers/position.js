const position = (state = {x:0, y:0}, action) => {
	if (action.type === 'MOVE_PLAYER') {
        return {x: state.x + action.x, y: state.y + action.y}
	} else {
		return state
	}
}

export default position