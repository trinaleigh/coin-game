export const loadScore = () => {
	try {
		const userScore = localStorage.getItem('score')
		if (userScore === null) {
			return 0
		}
		return JSON.parse(userScore)	
	} catch (err) {
		return 0
	}
}

export const saveScore = (state) => {
	try {
		const userScore = JSON.stringify(state.game.highScore)
		localStorage.setItem('score', userScore)
	} catch (err) {
		console.log(err)
	}
}