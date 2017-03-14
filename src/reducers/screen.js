const screen = (state = [], action) => {
	if (action.type === 'UPDATE_SCREEN') {
		return action.coords;
	} else {
		return state
	}
}

export default screen