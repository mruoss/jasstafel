import * as actionTypes from '../constants/redux-store/action-types'

export const openKeyboardForPlayer = (player) => ({
	type: actionTypes.UI_OPEN_KEYBOARD,
	player,
})

export const closeKeyboard = () => ({
	type: actionTypes.UI_CLOSE_KEYBOARD,
})

export const setPlayerName = (player, name) => ({
	type: actionTypes.SET_PLAYER_NAME,
	player,
	name,
})

export const flipBoard = () => ({
	type: actionTypes.UI_FLIP_BOARD,
})
