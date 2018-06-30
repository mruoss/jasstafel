import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Line } from 'react-konva'

import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'

const TouchScreen = ({ scope, onClickHundred, onClickFifty, onClickTwenty, onClickOne, debug = false }) => (
	<DimensionsConsumer scope={scope}>
		{({ getPoint }) => (
			<Layer>
				<Line
					points={[
						...Object.values(getPoint(10, 2)),
						...Object.values(getPoint(90, 2)),
						...Object.values(getPoint(90, 18)),
						...Object.values(getPoint(10, 18)),
					]}
					fill={debug && 'rgba(93,121,255,.2)'}
					onClick={onClickTwenty}
					closed
				/>
				<Line
					points={[
						...Object.values(getPoint(10, 20)),
						...Object.values(getPoint(70, 80)),
						...Object.values(getPoint(90, 80)),
						...Object.values(getPoint(30, 20)),
					]}
					closed
					onClick={onClickFifty}
					fill={debug && 'rgba(93,121,255,.2)'}
				/>
				<Line
					points={[
						...Object.values(getPoint(10, 82)),
						...Object.values(getPoint(90, 82)),
						...Object.values(getPoint(90, 98)),
						...Object.values(getPoint(10, 98)),
					]}
					closed
					onClick={onClickHundred}
					fill={debug && 'rgba(93,121,255,.2)'}
				/>
				<Line
					points={[
						...Object.values(getPoint(80, 30)),
						...Object.values(getPoint(80, 65)),
						...Object.values(getPoint(95, 65)),
						...Object.values(getPoint(95, 30)),
					]}
					closed
					onClick={onClickOne}
					fill={debug && 'rgba(93,121,255,.2)'}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)

TouchScreen.propTypes = {
	scope: PropTypes.string.isRequired,
	onClickHundred: PropTypes.func.isRequired,
	onClickFifty: PropTypes.func.isRequired,
	onClickTwenty: PropTypes.func.isRequired,
	onClickOne: PropTypes.func.isRequired,
	debug: PropTypes.bool,
}

export default TouchScreen
