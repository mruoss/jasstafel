import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { faCode, faEraser } from '@fortawesome/free-solid-svg-icons'

import { Layer } from 'react-konva'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { flipBoard } from '../../../actions/ui'
import { clearBackside } from '../../../actions/backside'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import IconButton from '../../Scoreboard/TouchScreen/IconButton'

const mapDispatchToProps = {
	clearBackside,
	flipBoard,
}

const mapStateToProps = null

const enhance = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)

const GlobalTouchScreen = ({ clearBackside, flipBoard }) => (
	<DimensionsConsumer scope={SCOPE_GLOBAL}>
		{({ getPoint, iconScale }) => (
			<Layer>
				<IconButton
					iconPath={faCode.icon[4]}
					bottomLeft={getPoint(88, 48)}
					topRight={getPoint(97, 52)}
					iconPosition={getPoint(89.5, 48.5)}
					iconScale={iconScale}
					onStrike={() => flipBoard()}
				/>
				<IconButton
					iconPath={faEraser.icon[4]}
					bottomLeft={getPoint(1, 47)}
					topRight={getPoint(8, 54)}
					iconPosition={getPoint(2, 48)}
					iconScale={iconScale}
					onStrike={() => clearBackside()}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)
GlobalTouchScreen.propTypes = {
	clearBackside: PropTypes.func.isRequired,
	flipBoard: PropTypes.func.isRequired,
}

export default enhance(GlobalTouchScreen)
