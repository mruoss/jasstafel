import * as actionTypes from '../constants/redux-store/action-types'

export const openKeyboardForPlayer = player => ({
	type: actionTypes.UI_OPEN_KEYBOARD,
	player,
})

export const closeKeyboard = () => ({
	type: actionTypes.UI_CLOSE_KEYBOARD,
})
