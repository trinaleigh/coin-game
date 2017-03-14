const score = (state = 0, action) => {
	if (action.type == 'ADD_COIN') {
    	return state + action.points
	} else {
		return state
	}
}

export default score