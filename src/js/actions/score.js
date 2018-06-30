import * as actionTypes from '../constants/redux-store/action-types'
import * as scopes from '../constants/redux-store/scopes'

export const addHundred = (player, qty) => ({
	type: actionTypes.ADD_HUNDRED,
	scope: scopes.SCORE,
	player,
	qty,
})

export const addFifty = (player, qty) => ({
	type: actionTypes.ADD_FIFITY,
	scope: scopes.SCORE,
	player,
	qty,
})

export const addTwenty = (player, qty) => ({
	type: actionTypes.ADD_TWENTY,
	scope: scopes.SCORE,
	player,
	qty,
})

export const addOne = (player, qty) => ({
	type: actionTypes.ADD_ONE,
	scope: scopes.SCORE,
	player,
	qty,
})
