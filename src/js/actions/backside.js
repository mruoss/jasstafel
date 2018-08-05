import * as actionTypes from '../constants/redux-store/action-types'

export const addLineOnBackside = line => ({
	type: actionTypes.BACKSIDE_ADD_LINE,
	line,
})

export const clearBackside = () => ({
	type: actionTypes.BACKSIDE_CLEAR,
})
