export const loadScore = () => {
	try {
		const userScore = localStorage.getItem('score')
		if (userScore === null) {
			return 0
		}
		return parseInt(userScore)	
	} catch (err) {
		return 0
	}
}

export const saveScore = (state) => {
	try {
		const userScore = state.game.highScore.toString()
		localStorage.setItem('score', userScore)
	} catch (err) {
		console.log(err)
	}
}