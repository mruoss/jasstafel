import React from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'

import { Stage, Layer } from 'react-konva'

import useWindowSizes from '../../hooks/UseWindowSizes'
import DimensionsProvider from '../DimensionsContext/DimensionsProvider'
import Layers from './Layers'

const Backside = ({ store }) => {
	const { width, height } = useWindowSizes()
	return (
		<Stage width={width} height={height} left={0} top={0}>
			<ReduxProvider store={store}>
				<DimensionsProvider>
					<Layers />
				</DimensionsProvider>
			</ReduxProvider>
		</Stage>
	)
}

Backside.propTypes = {
	store: PropTypes.object.isRequired,
}

export default Backside
