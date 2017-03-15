const coins = (state = [{x:2, y:7}, {x:4, y:2}], action) => {
	if (action.type === 'UPDATE_SCREEN') {
		return action.coords;
	} else {
		return state
	}
}

export default coins