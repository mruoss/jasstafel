import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Layer } from 'react-konva'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { resetScore } from '../../../actions/score'
import { selectPastScoreLength, selectFutureScoreLength } from '../../../selectors/score'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import IconButton from './IconButton'

const { undo, redo } = UndoActionCreators
const mapDispatchToProps = {
	undo,
	redo,
	resetScore,
}

const mapStateToProps = state => ({
	isUndoEnabled: selectPastScoreLength(state) > 0,
	isRedoEnabled: selectFutureScoreLength(state) > 0,
})

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

const GlobalTouchScreen = ({ undo, redo, resetScore, isUndoEnabled, isRedoEnabled }) => (
	<DimensionsConsumer scope={SCOPE_GLOBAL}>
		{({ getPoint }) => (
			<Layer>
				<IconButton
					charUnicode="f0e2"
					bottomLeft={getPoint(1, 39)}
					topRight={getPoint(8, 46)}
					textPosition={getPoint(4.5, 42.5)}
					onStrike={() => undo()}
					disabled={!isUndoEnabled}
				/>
				<IconButton
					charUnicode="f01e"
					bottomLeft={getPoint(1, 47)}
					topRight={getPoint(8, 54)}
					textPosition={getPoint(4.5, 50.5)}
					onStrike={() => redo()}
					disabled={!isRedoEnabled}
				/>
				<IconButton
					charUnicode="f12d"
					bottomLeft={getPoint(1, 55)}
					topRight={getPoint(8, 62)}
					textPosition={getPoint(4.5, 58.5)}
					onStrike={() => resetScore()}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)
GlobalTouchScreen.propTypes = {
	undo: PropTypes.func.isRequired,
	redo: PropTypes.func.isRequired,
	resetScore: PropTypes.func.isRequired,
	isUndoEnabled: PropTypes.bool,
	isRedoEnabled: PropTypes.bool,
}

export default enhance(GlobalTouchScreen)
