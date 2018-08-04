import * as actionTypes from '../../constants/redux-store/action-types'
import * as players from '../../constants/redux-store/players'

const initialState = {
	keyboardOpenFor: null,
	isBoardFlipped: false,
	playerNames: {
		[players.PLAYER_1]: 'Team Green',
		[players.PLAYER_2]: 'Team Blue',
	},
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
		case actionTypes.SET_PLAYER_NAME:
			return {
				...state,
				playerNames: {
					...state.playerNames,
					[action.player]: action.name,
				},
			}
		case actionTypes.UI_FLIP_BOARD:
			return {
				...state,
				isBoardFlipped: !state.isBoardFlipped,
			}
		default:
			return state
	}
}
