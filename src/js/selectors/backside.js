import getOr from 'lodash/fp/getOr'
import { createSelector } from 'reselect'

const selectBackside = getOr({}, 'backside')
export const selectBacksideLines = createSelector(
	selectBackside,
	getOr([], 'lines'),
)
