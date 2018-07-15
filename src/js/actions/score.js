import * as actionTypes from '../constants/redux-store/action-types'
import * as players from '../constants/redux-store/players'

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

export const addPoints = (player, points, timestamp) => ({
	type: actionTypes.ADD_POINTS,
	player,
	points,
	timestamp,
})

export const resetScore = () => ({
	type: actionTypes.RESET_SCORE,
	player: players.ALL,
})
