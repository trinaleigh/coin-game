import { combineReducers } from 'redux'
import score from './score.js'
import position from './position.js'
import coins from './coins.js'

const game = combineReducers({
  score,
  position,
  coins
})

export default game