import getOr from 'lodash/fp/getOr'

export const selectScore = getOr({}, 'score')

export const selectScorePlayer1 = getOr({}, 'score.player1')
export const selectScorePlayer2 = getOr({}, 'score.player2')
