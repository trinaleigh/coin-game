import { connect } from 'react-redux'
import ResetButton from '../components/ResetButton.js'
import { resetBoard } from '../actions'
import { resetClock } from '../actions'
import { decrement } from '../actions'

const mapStateToProps = (state) => {
	return {
		visibility: state.timer > 0 ? "hidden" : "visible"
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetClick: () => {
			dispatch(resetBoard())

			dispatch(resetClock())

			var newCount = setInterval(() => {dispatch(decrement())},1000)
			setTimeout(() => {clearInterval(newCount)},31000)
		}
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton)

export default Reset