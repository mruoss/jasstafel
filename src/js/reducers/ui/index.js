import * as actionTypes from '../../constants/redux-store/action-types'

const initialState = {
	keyboardOpenFor: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UI_OPEN_KEYBOARD:
			return {
				...state,
				keyboardOpenFor: action.player,
			}
		case actionTypes.UI_CLOSE_KEYBOARD:
			return {
				...state,
				keyboardOpenFor: null,
			}
		default:
			return state
	}
}
