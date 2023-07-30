import { combineReducers } from 'redux'
import * as ReduxUndo from 'redux-undo'
import get from 'lodash/fp/get'
import * as actionTypes from '../constants/redux-store/action-types'

import score from './score'
import ui from './ui'
import backside from './backside'

const undoableConfig = {
	limit: 200,
	groupBy: get('timestamp'),
	filter: ReduxUndo.includeAction([
		actionTypes.ADD_HUNDRED,
		actionTypes.ADD_FIFITY,
		actionTypes.ADD_TWENTY,
		actionTypes.ADD_POINTS,
		actionTypes.RESET_SCORE,
	]),
	debug: true,
}

export default combineReducers({ score: ReduxUndo.default(score, undoableConfig), ui, backside })
