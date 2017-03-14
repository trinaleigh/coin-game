import { combineReducers } from 'redux'
import score from './score.js'
import position from './position.js'
import screen from './screen.js'

const game = combineReducers({
  score,
  position,
  screen
})

export default game