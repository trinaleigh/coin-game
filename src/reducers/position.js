const position = (state = {x:0, y:0}, action) => {
	if (action.type === 'MOVE_PLAYER') {
		
		var xNext = state.x + action.dx
		var yNext = state.y + action.dy
		
		if (xNext > 9) {
			xNext = 0
		} else if (xNext < 0) {
			xNext = 9
		}
				
		if (yNext > 9) {
			yNext = 0
		} else if (yNext < 0) {
			yNext = 9
		}		

        return {x: xNext, 
        		y: yNext}
	} else {
		return state
	}
}

export default position