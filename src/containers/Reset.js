import { connect } from 'react-redux'
import ResetButton from '../components/ResetButton.js'
import { reset } from '../actions'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetClick: () => {
			dispatch(reset())
		}
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton)

export default Reset