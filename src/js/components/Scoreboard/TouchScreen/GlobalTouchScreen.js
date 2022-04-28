import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { faUndo, faRedo, faEraser, faCode } from '@fortawesome/free-solid-svg-icons'

import { Group } from 'react-konva/lib/ReactKonvaCore'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { resetScore } from '../../../actions/score'
import { flipBoard } from '../../../actions/ui'
import { selectPastScoreLength, selectFutureScoreLength } from '../../../selectors/score'

import IconButton from './IconButton'
import UseDimensionsContext from '../../DimensionsContext/UseDimensionsContext'

const { undo, redo } = UndoActionCreators

const GlobalTouchScreen = () => {
	const isUndoEnabled = useSelector((state) => selectPastScoreLength(state) > 0)
	const isRedoEnabled = useSelector((state) => selectFutureScoreLength(state) > 0)
	const { getPoint, iconScale, rotationDeg } = UseDimensionsContext(SCOPE_GLOBAL)
	const dispatch = useDispatch()

	return (
		<Group>
			<IconButton
				iconPath={faUndo.icon[4]}
				bottomLeft={getPoint(1, 39)}
				topRight={getPoint(8, 46)}
				iconPosition={getPoint(2, 40)}
				iconScale={iconScale}
				onStrike={() => dispatch(undo())}
				disabled={!isUndoEnabled}
				rotation={rotationDeg}
			/>
			<IconButton
				iconPath={faRedo.icon[4]}
				bottomLeft={getPoint(1, 47)}
				topRight={getPoint(8, 54)}
				iconPosition={getPoint(2, 48)}
				iconScale={iconScale}
				onStrike={() => dispatch(redo())}
				disabled={!isRedoEnabled}
				rotation={rotationDeg}
			/>
			<IconButton
				iconPath={faEraser.icon[4]}
				bottomLeft={getPoint(1, 55)}
				topRight={getPoint(8, 62)}
				iconPosition={getPoint(2, 56)}
				iconScale={iconScale}
				onStrike={() => dispatch(resetScore())}
				rotation={rotationDeg}
			/>
			<IconButton
				iconPath={faCode.icon[4]}
				bottomLeft={getPoint(88, 48)}
				topRight={getPoint(97, 52)}
				iconPosition={getPoint(89.5, 48.5)}
				iconScale={iconScale}
				onStrike={() => dispatch(flipBoard())}
				rotation={rotationDeg}
			/>
		</Group>
	)
}

export default GlobalTouchScreen
