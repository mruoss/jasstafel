import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { scoreShape } from '../../constants/prop-types'
import { selectScore } from '../../selectors/score'
import { selectKeyboardOpenFor, selectPlayerNames } from '../../selectors/ui'
import { SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from '../DimensionsContext/context'
import * as players from '../../constants/redux-store/players'
import { addHundred, addFifty, addTwenty, addPoints } from '../../actions/score'
import { openKeyboardForPlayer, closeKeyboard, setPlayerName } from '../../actions/ui'

import Blackboard from '../Blackboard'
import Keyboard from './Keyboard'
import Score from './Score'
import PlayerTouchScreen from './TouchScreen/PlayerTouchScreen'
import GlobalTouchScreen from './TouchScreen/GlobalTouchScreen'
import PlayerName from './PlayerName'
import Z from './Z'

const mapStateToProps = state => ({
	score: selectScore(state),
	keyboardOpenFor: selectKeyboardOpenFor(state),
	playerNames: selectPlayerNames(state),
})

const mapDispatchToProps = {
	addHundred,
	addFifty,
	addTwenty,
	addPoints,
	openKeyboardForPlayer,
	setPlayerName,
	closeKeyboard,
}

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

const Layers = ({
	score,
	playerNames,
	keyboardOpenFor,
	addHundred,
	addFifty,
	addTwenty,
	addPoints,
	openKeyboardForPlayer,
	setPlayerName,
	closeKeyboard,
}) => [
	<Blackboard key="blackboard" />,

	<Z key="z-p1" scope={SCOPE_PLAYER_1} />,
	<Z key="z-p2" scope={SCOPE_PLAYER_2} />,

	<Score key="score-p1" scope={SCOPE_PLAYER_1} score={score[players.PLAYER_1]} />,
	<Score key="score-p2" scope={SCOPE_PLAYER_2} score={score[players.PLAYER_2]} />,

	<PlayerName
		key="playername-p1"
		scope={SCOPE_PLAYER_1}
		name={playerNames[players.PLAYER_1]}
		setPlayerName={setPlayerName}
	/>,
	<PlayerName
		key="playername-p2"
		scope={SCOPE_PLAYER_2}
		name={playerNames[players.PLAYER_2]}
		setPlayerName={setPlayerName}
	/>,

	...(keyboardOpenFor
		? []
		: [
				<PlayerTouchScreen
					key="ts-p1"
					scope={SCOPE_PLAYER_1}
					onClickHundred={() => addHundred(players.PLAYER_1, 1)}
					onClickFifty={() => addFifty(players.PLAYER_1, 1)}
					onClickTwenty={() => addTwenty(players.PLAYER_1, 1)}
					onClickOne={() => openKeyboardForPlayer(players.PLAYER_1)}
				/>,
				<PlayerTouchScreen
					key="ts-p2"
					scope={SCOPE_PLAYER_2}
					onClickHundred={() => addHundred(players.PLAYER_2, 1)}
					onClickFifty={() => addFifty(players.PLAYER_2, 1)}
					onClickTwenty={() => addTwenty(players.PLAYER_2, 1)}
					onClickOne={() => openKeyboardForPlayer(players.PLAYER_2)}
				/>,
				<GlobalTouchScreen key="ts-g" />,
		  ]),

	...(keyboardOpenFor === players.PLAYER_1
		? [
				<Keyboard
					key="kb-p1"
					scope={SCOPE_PLAYER_1}
					onConfirm={({ me, you }) => {
						const timestamp = Date.now()
						addPoints(players.PLAYER_1, me, timestamp)
						you > 0 && addPoints(players.PLAYER_2, you, timestamp)
					}}
					closeKeyboard={closeKeyboard}
				/>,
		  ]
		: []),
	...(keyboardOpenFor === players.PLAYER_2
		? [
				<Keyboard
					key="kb-p2"
					scope={SCOPE_PLAYER_2}
					onConfirm={({ me, you }) => {
						const timestamp = Date.now()
						addPoints(players.PLAYER_2, me, timestamp)
						you > 0 && addPoints(players.PLAYER_1, you, timestamp)
					}}
					closeKeyboard={closeKeyboard}
				/>,
		  ]
		: []),
]

Layers.propTypes = {
	score: PropTypes.shape({
		[players.PLAYER_1]: scoreShape,
		[players.PLAYER_2]: scoreShape,
	}),
	playerNames: PropTypes.shape({
		[players.PLAYER_1]: PropTypes.string.isRequired,
		[players.PLAYER_2]: PropTypes.string.isRequired,
	}),
	keyboardOpenFor: PropTypes.string,
	addHundred: PropTypes.func.isRequired,
	addFifty: PropTypes.func.isRequired,
	addTwenty: PropTypes.func.isRequired,
	openKeyboardForPlayer: PropTypes.func.isRequired,
	setPlayerName: PropTypes.func.isRequired,
	closeKeyboard: PropTypes.func.isRequired,
}

export default enhance(Layers)
