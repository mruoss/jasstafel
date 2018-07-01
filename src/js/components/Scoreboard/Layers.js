import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectScore } from '../../selectors/score'
import { SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from '../DimensionsContext/context'
import * as players from '../../constants/redux-store/players'
import { addHundred, addFifty, addTwenty, addOne } from '../../actions/score'

import Blackboard from '../Blackboard'
import Score from './Score'
import TouchScreen from './TouchScreen'
import Z from './Z'

const mapStateToProps = state => ({
	score: selectScore(state),
})

const mapDispatchToProps = {
	addHundred,
	addFifty,
	addTwenty,
	addOne,
}

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

const Layers = ({ score, addHundred, addFifty, addTwenty, addOne }) => [
	<Blackboard key="blackboard" />,

	<Z key="z-p1" scope={SCOPE_PLAYER_1} />,
	<Z key="z-p2" scope={SCOPE_PLAYER_2} />,

	<Score key="score-p1" scope={SCOPE_PLAYER_1} score={score[players.PLAYER_1]} />,
	<Score key="score-p2" scope={SCOPE_PLAYER_2} score={score[players.PLAYER_2]} />,

	<TouchScreen
		key="ts-p1"
		scope={SCOPE_PLAYER_1}
		onClickHundred={() => addHundred(players.PLAYER_1, 1)}
		onClickFifty={() => addFifty(players.PLAYER_1, 1)}
		onClickTwenty={() => addTwenty(players.PLAYER_1, 1)}
		onClickOne={() => addOne(players.PLAYER_1, 1)}
	/>,
	<TouchScreen
		key="ts-p2"
		scope={SCOPE_PLAYER_2}
		onClickHundred={() => addHundred(players.PLAYER_2, 1)}
		onClickFifty={() => addFifty(players.PLAYER_2, 1)}
		onClickTwenty={() => addTwenty(players.PLAYER_2, 1)}
		onClickOne={() => addOne(players.PLAYER_2, 1)}
	/>,
]

Layers.propTypes = {
	score: PropTypes.object.isRequired,
	addHundred: PropTypes.func.isRequired,
	addFifty: PropTypes.func.isRequired,
	addTwenty: PropTypes.func.isRequired,
	addOne: PropTypes.func.isRequired,
}

export default enhance(Layers)
