import * as actionTypes from '../../constants/redux-store/action-types'

const initialState = {
	hundred: 0,
	fifty: 0,
	twenty: 0,
	one: 0,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_HUNDRED:
			return {
				...state,
				hundred: state.hundred + action.qty,
			}
		case actionTypes.ADD_FIFITY:
			return {
				...state,
				fifty: state.fifty + action.qty,
			}
		case actionTypes.ADD_TWENTY:
			return {
				...state,
				twenty: state.twenty + action.qty,
			}
		case actionTypes.ADD_ONE:
			return {
				...state,
				one: state.one + action.qty,
			}
		default:
			return state
	}
}
