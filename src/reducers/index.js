import { combineReducers } from 'redux'
import game from './game.js'
import timer from './timer.js'

const coinGameReducer = combineReducers({
  game,
  timer
})

export default coinGameReducer
