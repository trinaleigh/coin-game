import React from 'react';
import { Link } from 'react-router';
import Board from '../containers/Board.js';


export default class Home extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<Board/>
	    	</div>
	    );
	}
}

