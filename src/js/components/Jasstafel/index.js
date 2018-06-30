import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'

import { Stage } from 'react-konva'
import { SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from '../DimensionsContext/context'
import DimensionsProvider from '../DimensionsContext/DimensionsProvider'

import Blackboard from '../Blackboard'
import Score from './Score'
import TouchScreen from './TouchScreen'
import Z from './Z'

const Jasstafel = ({ width, height }) => (
	<Stage width={width} height={height} left={0} top={0}>
		<DimensionsProvider>
			<Blackboard />

			<Z scope={SCOPE_PLAYER_1} />
			<Z scope={SCOPE_PLAYER_2} />

			<Score scope={SCOPE_PLAYER_1} score={{ hundred: 13, fifty: 20, twenty: 22, one: 5 }} />
			<Score scope={SCOPE_PLAYER_2} score={{ hundred: 13, fifty: 7, twenty: 22, one: 7 }} />

			<TouchScreen
				scope={SCOPE_PLAYER_1}
				onClickHundred={() => {}}
				onClickFifty={() => {}}
				onClickTwenty={() => {}}
				onClickOne={() => {}}
				debug
			/>
			<TouchScreen
				scope={SCOPE_PLAYER_2}
				onClickHundred={() => {}}
				onClickFifty={() => {}}
				onClickTwenty={() => {}}
				onClickOne={() => {}}
				debug
			/>
		</DimensionsProvider>
	</Stage>
)

Jasstafel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default withSizes(props => props)(Jasstafel)
