/* eslint-env browser */
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { render } from 'react-dom'
import '../sass/global.sass'
import { createStore, compose } from 'redux'
import { saveState, loadState } from './localStorage'
import Jasstafel from './components/Jasstafel'

import reducer from './reducers'

function registerSW() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js')
			.catch(() => alert('ServiceWorker registration failed. Sorry about that.'))
	}
}

window.addEventListener('load', () => {
	registerSW()
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, loadState(), enhancer)

store.subscribe(() => {
  saveState({
	  backside: store.getState().backside,
	  score: store.getState().score,
  });
});

const appRootElement = document.getElementById('jasstafel')
render(
	<ReduxProvider store={store}>
		<Jasstafel store={store} />
	</ReduxProvider>,
	appRootElement,
)
