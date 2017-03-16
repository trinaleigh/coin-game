const timer = (state = 0, action) => {
	if (action.type === 'DECREMENT') {
		return state - 1 >= 0 ? state - 1 : 0
	} else if (action.type === 'RESET_CLOCK'){
		return 30
	} else {
		return state
	}
}

export default timer