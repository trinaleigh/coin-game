'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Layout from './components/Layout';
import GameWindow from './components/GameWindow';

const routes = (
		<Route path='/' component={Layout}>
			<IndexRoute component={GameWindow}/>
		</Route>
);

export default routes;