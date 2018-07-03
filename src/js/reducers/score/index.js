import * as players from '../../constants/redux-store/players'

import player from './player'

const initialPlayer = player(undefined, {})

const initialState = {
	[players.PLAYER_1]: initialPlayer,
	[players.PLAYER_2]: initialPlayer,
}

export default (state = initialState, action) => {
	if (action.player) {
		return action.player === players.ALL
			? {
					[players.PLAYER_1]: player(state[players.PLAYER_1], action),
					[players.PLAYER_2]: player(state[players.PLAYER_2], action),
			  }
			: {
					...state,
					[action.player]: player(state[action.player], action),
			  }
	}
	return state
}
