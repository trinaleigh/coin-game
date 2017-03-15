import { connect } from 'react-redux'
import Controls from '../components/Controls.js'
import { movePlayer } from '../actions'

const mapStateToProps = (state) => {
	return {
		x: state.x,
		y: state.y,
		coins: state.coins,
		score: state.score
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		translate: (event) => {
			dispatch(movePlayer(event.nativeEvent.offsetX, event.nativeEvent.offsetY))
		}
	}
}

const Board = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)

export default Board