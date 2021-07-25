import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Layer, Group } from 'react-konva'

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

const Layers = () =>
{
	const dispatch = useDispatch()

	const score = useSelector(selectScore)
	const keyboardOpenFor = useSelector(selectKeyboardOpenFor)
	const playerNames = useSelector(selectPlayerNames)

	return (
		<Layer>
			<Blackboard key="blackboard"/>

			<Z key="z-p1" scope={SCOPE_PLAYER_1} />
			<Z key="z-p2" scope={SCOPE_PLAYER_2} />

			<Score key="score-p1" scope={SCOPE_PLAYER_1} score={score[players.PLAYER_1]} />
			<Score key="score-p2" scope={SCOPE_PLAYER_2} score={score[players.PLAYER_2]} />

			<PlayerName
				key="playername-p1"
				scope={SCOPE_PLAYER_1}
				name={playerNames[players.PLAYER_1]}
				setPlayerName={(scope, name) => dispatch(setPlayerName(scope, name))}
			/>
			<PlayerName
				key="playername-p2"
				scope={SCOPE_PLAYER_2}
				name={playerNames[players.PLAYER_2]}
				setPlayerName={(scope, name) => dispatch(setPlayerName(scope, name))}
			/>

			{
				keyboardOpenFor ? null : (
					<Group>
						<PlayerTouchScreen
							key="ts-p1"
							scope={SCOPE_PLAYER_1}
							onClickHundred={() => dispatch(addHundred(players.PLAYER_1, 1))}
							onClickFifty={() => dispatch(addFifty(players.PLAYER_1, 1))}
							onClickTwenty={() => dispatch(addTwenty(players.PLAYER_1, 1))}
							onClickOne={() => dispatch(openKeyboardForPlayer(players.PLAYER_1))}
						/>
						<PlayerTouchScreen
							key="ts-p2"
							scope={SCOPE_PLAYER_2}
							onClickHundred={() => dispatch(addHundred(players.PLAYER_2, 1))}
							onClickFifty={() => dispatch(addFifty(players.PLAYER_2, 1))}
							onClickTwenty={() => dispatch(addTwenty(players.PLAYER_2, 1))}
							onClickOne={() => dispatch(openKeyboardForPlayer(players.PLAYER_2))}
						/>
						<GlobalTouchScreen key="ts-g" />
					</Group>
				)
			}
			{
				keyboardOpenFor === players.PLAYER_1 ? (
					<Keyboard
						key="kb-p1"
						scope={SCOPE_PLAYER_1}
						onConfirm={({me, you}) => {
							const timestamp = Date.now()
							dispatch(addPoints(players.PLAYER_1, me, timestamp))
							you > 0 && dispatch(addPoints(players.PLAYER_2, you, timestamp))
						}}
						closeKeyboard={() => dispatch(closeKeyboard())}
					/>
				) : null
			}
			{
				keyboardOpenFor === players.PLAYER_2 ? (
					<Keyboard
						key="kb-p2"
						scope={SCOPE_PLAYER_2}
						onConfirm={({ me, you }) => {
							const timestamp = Date.now()
							dispatch(addPoints(players.PLAYER_2, me, timestamp))
							you > 0 && dispatch(addPoints(players.PLAYER_1, you, timestamp))
						}}
						closeKeyboard={() =>dispatch(closeKeyboard())}
					/>
				) : null
			}
		</Layer>
	)
}

export default Layers
