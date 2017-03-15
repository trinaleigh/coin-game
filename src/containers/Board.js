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
			var xClick = event.nativeEvent.offsetX/event.nativeEvent.target.offsetWidth
			var yClick = event.nativeEvent.offsetY/event.nativeEvent.target.offsetHeight
			dispatch(movePlayer(xClick,yClick))
		}
	}
}

const Board = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)

export default Board