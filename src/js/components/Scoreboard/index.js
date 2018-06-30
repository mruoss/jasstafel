import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'
import { Provider as ReduxProvider } from 'react-redux'

import { Stage } from 'react-konva'

import DimensionsProvider from '../DimensionsContext/DimensionsProvider'
import Layers from './Layers'

const enhance = withSizes(props => props)

const Scoreboard = ({ width, height, store }) => (
	<Stage width={width} height={height} left={0} top={0}>
		<ReduxProvider store={store}>
			<DimensionsProvider>
				<Layers />
			</DimensionsProvider>
		</ReduxProvider>
	</Stage>
)

Scoreboard.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	store: PropTypes.object.isRequired,
}

export default enhance(Scoreboard)
