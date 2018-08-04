import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectScore } from '../../selectors/score'
import { selectKeyboardOpenFor, selectPlayerNames } from '../../selectors/ui'
import { addHundred, addFifty, addTwenty, addPoints } from '../../actions/score'
import { openKeyboardForPlayer, closeKeyboard, setPlayerName } from '../../actions/ui'

import Blackboard from '../Blackboard'
import GlobalTouchScreen from './TouchScreen/GlobalTouchScreen'

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

const Layers = () => [<Blackboard key="blackboard" />, <GlobalTouchScreen key="ts-g" />]

Layers.propTypes = {}

export default enhance(Layers)
