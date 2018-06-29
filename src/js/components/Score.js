import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'

import { Layer, Line, Shape } from 'react-konva'

import { withDimensions, strokeWidth } from '../utils/drawing'

const enhance = compose(withDimensions)

const Score = ({ score, otherPlayer, getPointForPlayer }) => (
	<Layer>
		{[...Array(score.hundred)].map((_, i) => (
			<Line
				key={`hundred-${i}`}
				points={
					(i + 1) % 5 === 0
						? [
								...Object.values(getPointForPlayer(12 + (i - 5) * 1.5, 96, otherPlayer)),
								...Object.values(getPointForPlayer(12 + i * 1.5, 84, otherPlayer)),
						  ]
						: [
								...Object.values(getPointForPlayer(12 + i * 1.5, 96, otherPlayer)),
								...Object.values(getPointForPlayer(12 + i * 1.5, 84, otherPlayer)),
						  ]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(score.fifty)].map((_, i) => (
			<Line
				key={`fifty-${i}`}
				points={
					i % 2 === 0
						? [
								...Object.values(getPointForPlayer(22 + i * 2 * 1.5, 14 + i * 3, otherPlayer)),
								...Object.values(getPointForPlayer(21 + i * 2 * 1.5 + 1, 30 + i * 3, otherPlayer)),
						  ]
						: [
								...Object.values(getPointForPlayer(22 + i * 2 * 1.5, 14 + i * 3, otherPlayer)),
								...Object.values(getPointForPlayer(15 + i * 2 * 1.5 + 1, 24 + i * 3, otherPlayer)),
						  ]
					// :[]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		{[...Array(score.twenty)].map((_, i) => (
			<Line
				key={`twenty-${i}`}
				points={
					(i + 1) % 5 === 0
						? [
								...Object.values(getPointForPlayer(88 - (i - 5) * 1.5, 4, otherPlayer)),
								...Object.values(getPointForPlayer(88 - i * 1.5, 16, otherPlayer)),
						  ]
						: [
								...Object.values(getPointForPlayer(88 - i * 1.5, 4, otherPlayer)),
								...Object.values(getPointForPlayer(88 - i * 1.5, 16, otherPlayer)),
						  ]
				}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>
		))}
		<Shape
			{...getPointForPlayer(87, 46, otherPlayer)}
			sceneFunc={ctx => {
				if (!otherPlayer) {
					ctx.rotate(Math.PI)
				}
				ctx.fillStyle = 'white'
				ctx.font = '30px Arial'

				ctx.fillText(score.one, 0, 0)
				ctx.fill()
			}}
		/>
	</Layer>
)

Score.propTypes = {
	score: PropTypes.object.isRequired,
	getPointForPlayer: PropTypes.func.isRequired,
	otherPlayer: PropTypes.bool,
}

export default enhance(Score)
