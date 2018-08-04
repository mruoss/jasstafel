import get from 'lodash/fp/get'
import getOr from 'lodash/fp/getOr'
import { createSelector } from 'reselect'

export const selectUi = getOr({}, 'ui')
export const selectKeyboardOpenFor = createSelector(selectUi, get('keyboardOpenFor'))
export const selectPlayerNames = createSelector(selectUi, get('playerNames'))
export const selectisBoardFlipped = createSelector(selectUi, getOr(false, 'isBoardFlipped'))
