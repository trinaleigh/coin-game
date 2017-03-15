import { connect } from 'react-redux'
import Controls from '../components/Controls.js'
import { movePlayer } from '../actions'

const mapStateToProps = (state) => {
	return {
		x: state.position.x,
		y: state.position.y
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		translate: (event) => {
			dispatch(movePlayer(0,1))
		}
	}
}

const Board = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)

export default Board