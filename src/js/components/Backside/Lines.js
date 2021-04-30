import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import isEmpty from 'lodash/fp/isEmpty'
import { addLineOnBackside } from '../../actions/backside'
import { selectBacksideLines } from '../../selectors/backside'
import { Group, Line, Path } from 'react-konva'
import UseDimensionsContext from '../DimensionsContext/UseDimensionsContext'
import { SCOPE_GLOBAL } from '../DimensionsContext/context'
import { strokeWidth } from '../../constants/board'

const Lines = () => {
	const backsideLines = useSelector(state => selectBacksideLines(state))
	const dispatch = useDispatch()
	const [{ drawing, points }, setDrawer] = useState({drawing: false, points: []});

	const startDrawing = (event, getPointReverse) => {
		if (drawing) {
			dispatch(addLineOnBackside(points))
		}
		setDrawer({drawing: true, points: [getPointReverse(event.clientX, event.clientY)]})
	}
	const draw = (event, getPointReverse) => setDrawer({drawing, points: drawing ? [...points, getPointReverse(event.clientX, event.clientY)] : points})
	const stopDrawing = () => {
		if (drawing) {
			dispatch(addLineOnBackside(points))
		}
		setDrawer({drawing: false, points: []})
	}

	const { getPoint, iconScale, getPointReverse } = UseDimensionsContext(SCOPE_GLOBAL)

	return (
		<Group>
			<Path
				{...getPoint(45, 45)}
				fill="#666"
				data={faPencilAlt.icon[4]}
				scale={{ x: iconScale.x * 3, y: iconScale.y * 3 }}
			/>
			{backsideLines.map((line, key) => (
				<Line
					key={key}
					points={line.reduce((carry, point) => [...carry, ...Object.values(getPoint(point.x, point.y))], [])}
					stroke="#ffffff"
					strokeWidth={strokeWidth}
				/>
			))}
			{!isEmpty(points) && (
				<Line
					points={points.reduce((carry, point) => [...carry, ...Object.values(getPoint(point.x, point.y))], [])}
					stroke="#ffffff"
					strokeWidth={strokeWidth}
				/>
			)}
			<Line
				points={[
					...Object.values(getPoint(0, 0)),
					...Object.values(getPoint(0, 100)),
					...Object.values(getPoint(100, 100)),
					...Object.values(getPoint(100, 0)),
				]}
				closed
				onMouseDown={e => startDrawing(e.evt, getPointReverse)}
				onTouchstart={e => startDrawing(e.evt.touches[0], getPointReverse)}
				onMousemove={e => draw(e.evt, getPointReverse)}
				onTouchmove={e => draw(e.evt.touches[0], getPointReverse)}
				onMouseout={() => stopDrawing()}
				onMouseup={() => stopDrawing()}
				onTouchend={() => stopDrawing()}
			/>
		</Group>
	)
}


export default Lines
