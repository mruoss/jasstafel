import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'
import { faCode, faEraser } from '@fortawesome/free-solid-svg-icons'

import { Layer } from 'react-konva'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { flipBoard } from '../../../actions/ui'
import { clearBackside } from '../../../actions/backside'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import IconButton from '../../Scoreboard/TouchScreen/IconButton'


const GlobalTouchScreen = () => {
	const dispatch = useDispatch()

	return <DimensionsConsumer scope={SCOPE_GLOBAL}>
		{({ getPoint, iconScale }) => (
			<Layer>
				<IconButton
					iconPath={faCode.icon[4]}
					bottomLeft={getPoint(88, 48)}
					topRight={getPoint(97, 52)}
					iconPosition={getPoint(89.5, 48.5)}
					iconScale={iconScale}
					onStrike={() => dispatch(flipBoard())}
				/>
				<IconButton
					iconPath={faEraser.icon[4]}
					bottomLeft={getPoint(1, 47)}
					topRight={getPoint(8, 54)}
					iconPosition={getPoint(2, 48)}
					iconScale={iconScale}
					onStrike={() => dispatch(clearBackside())}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
}

export default GlobalTouchScreen
