import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import { Layer } from 'react-konva'
import { SCOPE_GLOBAL } from '../../DimensionsContext/context'

import { flipBoard } from '../../../actions/ui'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import IconButton from '../../Scoreboard/TouchScreen/IconButton'

const mapDispatchToProps = {
	flipBoard,
}

const mapStateToProps = null

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

const GlobalTouchScreen = ({ flipBoard }) => (
	<DimensionsConsumer scope={SCOPE_GLOBAL}>
		{({ getPoint, iconScale }) => (
			<Layer>
				<IconButton
					iconPath={faCode.icon[4]}
					bottomLeft={getPoint(91, 47)}
					topRight={getPoint(98, 54)}
					iconPosition={getPoint(91.5, 48.5)}
					iconScale={iconScale}
					onStrike={() => flipBoard()}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)
GlobalTouchScreen.propTypes = {
	flipBoard: PropTypes.func.isRequired,
}

export default enhance(GlobalTouchScreen)
