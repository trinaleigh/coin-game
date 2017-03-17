const game = (state = { x: 0, y: 0, direction: 0, coins: [], score: 0, highScore: 0 }, action) => {
	if (action.type === 'MOVE_PLAYER') {

		var xNext = state.x + action.dx
		var yNext = state.y + action.dy
		var nextCoins = state.coins
		var nextScore = state.score
		
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

		state.coins.forEach(coin => {
			if (coin.x === xNext && coin.y === yNext) {
				nextScore += coin.value
				for (let i=0; i<4; i++){
					nextCoins[i] = {x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10), value: i+1 }
				}		
			}
		})

        return {x: xNext, 
        		y: yNext,
        		direction: Math.atan2(action.dy, action.dx),
        		coins: nextCoins,
        		score: nextScore,
        		highScore: nextScore > state.highScore ? nextScore : state.highScore}

    } else if (action.type === 'RESET_BOARD') {

    	return { 
    		x: 0, 
    		y: 0,
    		direction: 0, 
    		coins: [{x:2, y:2, value:1}, {x:2, y:7, value:2}, {x:7, y:2, value:3}, {x:7, y:7, value:4}], 
    		score: 0,
    		highScore: state.highScore}

	} else {
		return state
	}
}

export default game