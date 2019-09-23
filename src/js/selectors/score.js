import getOr from 'lodash/fp/getOr'
import * as players from '../constants/redux-store/players'
import { createSelector } from 'reselect'

const selectScoreRaw = getOr({}, 'score')
export const selectScore = createSelector(
	selectScoreRaw,
	getOr({}, 'present'),
)

export const selectScorePlayer1 = createSelector(
	selectScore,
	getOr({}, `${players.PLAYER_1}`),
)
export const selectScorePlayer2 = createSelector(
	selectScore,
	getOr({}, `${players.PLAYER_2}`),
)

const selectPastScore = createSelector(
	selectScoreRaw,
	getOr([], 'past'),
)
const selectFutureScore = createSelector(
	selectScoreRaw,
	getOr([], 'future'),
)
export const selectPastScoreLength = createSelector(
	selectPastScore,
	score => score.length,
)
export const selectFutureScoreLength = createSelector(
	selectFutureScore,
	score => score.length,
)
