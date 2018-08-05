import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withStateHandlers } from 'recompose'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import isEmpty from 'lodash/fp/isEmpty'
import { addLineOnBackside } from '../../actions/backside'
import { selectBacksideLines } from '../../selectors/backside'
import { Layer, Line, Path } from 'react-konva'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { SCOPE_GLOBAL } from '../DimensionsContext/context'
import { strokeWidth } from '../../constants/board'

const mapStateToProps = state => ({
	backsideLines: selectBacksideLines(state),
})

const mapDispatchToProps = {
	addLineOnBackside,
}

const enhance = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
	withStateHandlers(
		() => ({
			drawing: false,
			points: [],
		}),
		{
			startDrawing: ({ drawing, points }, { addLineOnBackside }) => (event, getPointReverse) => {
				if (drawing) {
					addLineOnBackside(points)
				}
				return {
					drawing: true,
					points: [getPointReverse(event.clientX, event.clientY)],
				}
			},
			draw: ({ drawing, points }) => (event, getPointReverse) => ({
				drawing,
				points: drawing ? [...points, getPointReverse(event.clientX, event.clientY)] : points,
			}),
			stopDrawing: ({ drawing, points }, { addLineOnBackside }) => () => {
				if (drawing) {
					addLineOnBackside(points)
				}
				return {
					drawing: false,
					points: [],
				}
			},
		},
	),
)

const Lines = ({ points, backsideLines, startDrawing, draw, stopDrawing }) => (
	<DimensionsConsumer scope={SCOPE_GLOBAL}>
		{({ getPoint, iconScale, getPointReverse }) => (
			<Layer>
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
			</Layer>
		)}
	</DimensionsConsumer>
)
Lines.propTypes = {
	points: PropTypes.array.isRequired,
	backsideLines: PropTypes.array.isRequired,
	startDrawing: PropTypes.func.isRequired,
	draw: PropTypes.func.isRequired,
	stopDrawing: PropTypes.func.isRequired,
}

export default enhance(Lines)
