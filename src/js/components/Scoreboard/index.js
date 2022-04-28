import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'

import { Stage } from 'react-konva/lib/ReactKonvaCore'

import DimensionsProvider from '../DimensionsContext/DimensionsProvider'
import Layers from './Layers'
import useWindowSizes from '../../hooks/UseWindowSizes'

const Scoreboard = ({ store }) => {
	const {width, height} = useWindowSizes()

	return <Stage width={width} height={height} left={0} top={0}>
		<ReduxProvider store={store}>
			<DimensionsProvider>
				<Layers />
			</DimensionsProvider>
		</ReduxProvider>
	</Stage>
}

Scoreboard.propTypes = {
	store: PropTypes.object.isRequired,
}

export default Scoreboard
