import { connect } from 'react-redux'
import Controls from '../components/Controls.js'
import { movePlayer } from '../actions'

const mapStateToProps = (state) => {
	return {
		x: state.game.x,
		y: state.game.y,
		direction: state.game.direction,
		coins: state.game.coins,
		score: state.game.score,
		highScore: state.game.highScore,
		remaining: state.timer
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