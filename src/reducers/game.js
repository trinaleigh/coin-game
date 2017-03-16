const game = (state = { x: 0, y: 0, coins: [], score: 0, highScore: 0 }, action) => {
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
				for (let i=0; i<4; i++){
					nextCoins[i] = {x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)}
				}
				nextScore++
			}
		})

        return {x: xNext, 
        		y: yNext,
        		coins: nextCoins,
        		score: nextScore,
        		highScore: state.highScore}

    } else if (action.type === 'RESET_BOARD') {

    	return { 
    		x: 0, 
    		y: 0, 
    		coins: [{x:2, y:2}, {x:2, y:7}, {x:7, y:2}, {x:7, y:7},], 
    		score: 0,
    		highScore: state.score > state.highScore ? state.score : state.highScore}
    		
	} else {
		return state
	}
}

export default game