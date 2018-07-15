/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import '../sass/global.sass'
import { createStore, compose } from 'redux'

import Jasstafel from './components/Jasstafel'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, {}, enhancer)

const appRootElement = document.getElementById('jasstafel')
window.addEventListener('load', () => render(<Jasstafel store={store} />, appRootElement))
