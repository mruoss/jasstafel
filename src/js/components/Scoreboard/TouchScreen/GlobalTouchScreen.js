import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { faUndo, faRedo, faEraser, faCode } from '@fortawesome/free-solid-svg-icons'

import { Group } from 'react-konva'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { resetScore } from '../../../actions/score'
import { flipBoard } from '../../../actions/ui'
import { selectPastScoreLength, selectFutureScoreLength } from '../../../selectors/score'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import IconButton from './IconButton'
import UseDimensionsContext from '../../DimensionsContext/UseDimensionsContext'

const { undo, redo } = UndoActionCreators
const mapDispatchToProps = {
	undo,
	redo,
	resetScore,
	flipBoard,
}

const mapStateToProps = state => ({
	isUndoEnabled: selectPastScoreLength(state) > 0,
	isRedoEnabled: selectFutureScoreLength(state) > 0,
})

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

const GlobalTouchScreen = ({ undo, redo, resetScore, flipBoard, isUndoEnabled, isRedoEnabled }) => {
	const { getPoint, iconScale } = UseDimensionsContext(SCOPE_GLOBAL)
	return (
		<Group>
			<IconButton
				iconPath={faUndo.icon[4]}
				bottomLeft={getPoint(1, 39)}
				topRight={getPoint(8, 46)}
				iconPosition={getPoint(2, 40)}
				iconScale={iconScale}
				onStrike={() => undo()}
				disabled={!isUndoEnabled}
			/>
			<IconButton
				iconPath={faRedo.icon[4]}
				bottomLeft={getPoint(1, 47)}
				topRight={getPoint(8, 54)}
				iconPosition={getPoint(2, 48)}
				iconScale={iconScale}
				onStrike={() => redo()}
				disabled={!isRedoEnabled}
			/>
			<IconButton
				iconPath={faEraser.icon[4]}
				bottomLeft={getPoint(1, 55)}
				topRight={getPoint(8, 62)}
				iconPosition={getPoint(2, 56)}
				iconScale={iconScale}
				onStrike={() => resetScore()}
			/>
			<IconButton
				iconPath={faCode.icon[4]}
				bottomLeft={getPoint(88, 48)}
				topRight={getPoint(97, 52)}
				iconPosition={getPoint(89.5, 48.5)}
				iconScale={iconScale}
				onStrike={() => flipBoard()}
			/>
		</Group>
	)
}

GlobalTouchScreen.propTypes = {
	undo: PropTypes.func.isRequired,
	redo: PropTypes.func.isRequired,
	resetScore: PropTypes.func.isRequired,
	flipBoard: PropTypes.func.isRequired,
	isUndoEnabled: PropTypes.bool,
	isRedoEnabled: PropTypes.bool,
}

export default enhance(GlobalTouchScreen)
