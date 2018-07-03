import * as actionTypes from '../../constants/redux-store/action-types'
import { addPointsToScore, sanitizeScore } from '../../helpers/score'

const initialState = {
	hundred: 0,
	fifty: 0,
	twenty: 0,
	one: 0,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_HUNDRED:
			return sanitizeScore({
				...state,
				hundred: state.hundred + action.qty,
			})
		case actionTypes.ADD_FIFITY:
			return sanitizeScore({
				...state,
				fifty: state.fifty + action.qty,
			})
		case actionTypes.ADD_TWENTY:
			return sanitizeScore({
				...state,
				twenty: state.twenty + action.qty,
			})
		case actionTypes.ADD_ONE:
			return sanitizeScore({
				...state,
				one: state.one + action.qty,
			})
		case actionTypes.ADD_POINTS:
			return sanitizeScore(addPointsToScore(state, action.points))
		case actionTypes.RESET_SCORE:
			return initialState
		default:
			return state
	}
}
