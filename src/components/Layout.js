import React from 'react';
import thunk from 'redux-thunk';
import { Link } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import coinGameReducer from '../reducers';
import { loadScore, saveScore } from '../localStorage.js'

const persistedState = { 
	game : {
		x: 0, 
		y: 0, 
		direction: 0, 
		coins: [], 
		score: 0, 
		highScore: loadScore() }
}

const store = createStore(coinGameReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
	saveScore( store.getState() )
})

export default class Layout extends React.Component {
  
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	  		<Provider store={store}>
				<div className="app">
					<header>
						<h1></h1>
					</header>
					<div className="main-content">{this.props.children}</div>
					<footer>
					</footer>
				</div>
			</Provider>
	    );
	}
}

