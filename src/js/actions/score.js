import * as actionTypes from '../constants/redux-store/action-types'

export const addHundred = (player, qty) => ({
	type: actionTypes.ADD_HUNDRED,
	player,
	qty,
})

export const addFifty = (player, qty) => ({
	type: actionTypes.ADD_FIFITY,
	player,
	qty,
})

export const addTwenty = (player, qty) => ({
	type: actionTypes.ADD_TWENTY,
	player,
	qty,
})

export const addPoints = (player, points) => ({
	type: actionTypes.ADD_POINTS,
	player,
	points,
})
