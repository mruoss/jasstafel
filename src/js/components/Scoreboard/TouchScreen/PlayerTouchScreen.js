import React from 'react'
import PropTypes from 'prop-types'
import { Group, Line } from 'react-konva/lib/ReactKonvaCore'
import 'konva/lib/shapes/Line'

import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import UseDimensionsContext from '../../DimensionsContext/UseDimensionsContext'

const PlayerTouchScreen = ({ scope, onClickHundred, onClickFifty, onClickTwenty, onClickOne, debug = false }) => {
	const { getPoint } = UseDimensionsContext(scope)
	return (
		<Group>
			<Line
				points={[
					...Object.values(getPoint(10, 2)),
					...Object.values(getPoint(90, 2)),
					...Object.values(getPoint(90, 18)),
					...Object.values(getPoint(10, 18)),
				]}
				fill={debug ? 'rgba(93,121,255,.2)' : 'transparent'}
				onClick={onClickTwenty}
				onTouchstart={onClickTwenty}
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
				onTouchstart={onClickFifty}
				fill={debug ? 'rgba(93,121,255,.2)' : 'transparent'}
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
				onTouchstart={onClickHundred}
				fill={debug ? 'rgba(93,121,255,.2)' : 'transparent'}
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
				onTouchstart={onClickOne}
				fill={debug ? 'rgba(93,121,255,.2)' : 'transparent'}
			/>
		</Group>
	)
}

PlayerTouchScreen.propTypes = {
	scope: PropTypes.string.isRequired,
	onClickHundred: PropTypes.func.isRequired,
	onClickFifty: PropTypes.func.isRequired,
	onClickTwenty: PropTypes.func.isRequired,
	onClickOne: PropTypes.func.isRequired,
	debug: PropTypes.bool,
}

export default PlayerTouchScreen
