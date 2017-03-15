const position = (state = {x:0, y:0}, action) => {
	if (action.type === 'MOVE_PLAYER') {
		var xMove = state.x + action.x
		var yMove = state.y + action.y
        return {x: xMove > 0 && xMove < 10 ? xMove : 0, 
        		y: yMove > 0 && yMove < 10 ? yMove : 0}
	} else {
		return state
	}
}

export default position