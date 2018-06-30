import * as players from '../../constants/redux-store/players'
import * as scopes from '../../constants/redux-store/scopes'

import player from './player'

const initialPlayer = player(undefined, {})

const initialState = {
	[players.PLAYER_1]: initialPlayer,
	[players.PLAYER_2]: initialPlayer,
}

export default (state = initialState, action) => {
	if (action.scope === scopes.SCORE && action.player) {
		return {
			...state,
			[action.player]: player(state[action.player], action),
		}
	}
	return state
}
