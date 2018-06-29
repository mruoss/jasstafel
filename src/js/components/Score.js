import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'

import { Layer, Line, Shape } from 'react-konva'

import { withDimensions, strokeWidth } from '../utils/drawing'

const enhance = compose(withDimensions)

const Score = ({ player1, player2, getPoint, getPointObject }) => (
	<Layer>
		{[...Array(player1.hundred)].map((_, i) => (
			<Line
				key={`hundred-${i}`}
				points={
					(i + 1) % 5 === 0
						? [...getPoint(88 - i + 5, 48), ...getPoint(88 - i, 42)]
						: [...getPoint(88 - i, 48), ...getPoint(88 - i, 42)]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(player1.fifty)].map((_, i) => (
			<Line
				key={`fifty-${i}`}
				points={
					i % 2 === 0
						? [...getPoint(80 - i * 1.5, 6 + i * 0.75), ...getPoint(79 - i * 1.5 + 1, 14 + i * 0.75)]
						: [...getPoint(79 - i * 1.5, 6.5 + i * 0.75), ...getPoint(83 - i * 1.5 + 1, 12 + i * 0.75)]
					// :[]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(player1.twenty)].map((_, i) => (
			<Line
				key={`twenty-${i}`}
				points={
					(i + 1) % 5 === 0
						? [...getPoint(12 + i - 5, 2), ...getPoint(12 + i, 8)]
						: [...getPoint(12 + i, 2), ...getPoint(12 + i, 8)]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		<Shape
			{...getPointObject(13, 23)}
			sceneFunc={ctx => {
				ctx.rotate(Math.PI)
				ctx.fillStyle = 'white'
				ctx.font = '30px Arial'

				ctx.fillText(player1.one, 0, 0)
				ctx.fill()
			}}
		/>

		{[...Array(player2.hundred)].map((_, i) => (
			<Line
				key={`hundred-${i}`}
				points={
					(i + 1) % 5 === 0
						? [...getPoint(12 + i + 5, 52), ...getPoint(12 + i, 58)]
						: [...getPoint(12 + i, 52), ...getPoint(12 + i, 58)]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(player2.fifty)].map((_, i) => (
			<Line
				key={`fifty-${i}`}
				points={
					i % 2 === 0
						? [...getPoint(20 + i * 1.5, 94 - i * 0.75), ...getPoint(21 + i * 1.5 - 1, 86 - i * 0.75)]
						: [...getPoint(21 + i * 1.5, 93.5 - i * 0.75), ...getPoint(17 + i * 1.5 - 1, 88 - i * 0.75)]
					// :[]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(player2.twenty)].map((_, i) => (
			<Line
				key={`twenty-${i}`}
				points={
					(i + 1) % 5 === 0
						? [...getPoint(88 - i + 5, 98), ...getPoint(88 - i, 92)]
						: [...getPoint(88 - i, 98), ...getPoint(88 - i, 92)]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		<Shape
			{...getPointObject(87, 77)}
			sceneFunc={ctx => {
				ctx.fillStyle = 'white'
				ctx.font = '30px Arial'

				ctx.fillText(player2.one, 0, 0)
				ctx.fill()
			}}
		/>
	</Layer>
)

Score.propTypes = {
	player1: PropTypes.object.isRequired,
	player2: PropTypes.object.isRequired,
	getPoint: PropTypes.func.isRequired,
	getPointObject: PropTypes.func.isRequired,
}

export default enhance(Score)
