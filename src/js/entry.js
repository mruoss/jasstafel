/* eslint-env browser */
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { render } from 'react-dom'
import '../sass/global.sass'
import initAppcache from './helpers/appcache'
import { createStore, compose } from 'redux'

import Jasstafel from './components/Jasstafel'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, {}, enhancer)

const appRootElement = document.getElementById('jasstafel')
render(
	<ReduxProvider store={store}>
		<Jasstafel store={store} />
	</ReduxProvider>,
	appRootElement,
)
initAppcache()
