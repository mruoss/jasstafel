import * as actionTypes from '../../constants/redux-store/action-types'

const initialState = {
	lines: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BACKSIDE_ADD_LINE:
			return {
				lines: [...state.lines, action.line],
			}
		case actionTypes.BACKSIDE_CLEAR:
			return initialState
		default:
			return state
	}
}
