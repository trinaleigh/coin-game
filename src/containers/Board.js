import { connect } from 'react-redux'
import Grid from '../components/Grid.js'
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
)(Grid)

export default Board