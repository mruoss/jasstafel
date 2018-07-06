import getOr from 'lodash/fp/getOr'
import * as players from '../constants/redux-store/players'

export const selectScore = getOr({}, 'score')

export const selectScorePlayer1 = getOr({}, `score.${players.PLAYER_1}`)
export const selectScorePlayer2 = getOr({}, `score.${players.PLAYER_2}`)
