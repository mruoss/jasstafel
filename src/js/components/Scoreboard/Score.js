import React from 'react'
import PropTypes from 'prop-types'
import { strokeWidth } from '../../constants/board'

import { Layer, Line, Shape } from 'react-konva'
import { getNumericScore } from '../../helpers/score'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from '../DimensionsContext/context'

const Score = ({ scope, score }) => (
	<DimensionsConsumer scope={scope}>
		{({ getPoint, transposed }) => (
			<Layer>
				{[...Array(score.hundred)].map((_, i) => (
					<Line
						key={`hundred-${i}`}
						points={
							(i + 1) % 5 === 0
								? [
										...Object.values(getPoint(12 + (i - 5) * 1.5, 96)),
										...Object.values(getPoint(12 + i * 1.5, 84)),
								  ]
								: [...Object.values(getPoint(12 + i * 1.5, 96)), ...Object.values(getPoint(12 + i * 1.5, 84))]
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
										...Object.values(getPoint(22 + i * 2 * 1.5, 14 + i * 3)),
										...Object.values(getPoint(21 + i * 2 * 1.5 + 1, 30 + i * 3)),
								  ]
								: [
										...Object.values(getPoint(22 + i * 2 * 1.5, 14 + i * 3)),
										...Object.values(getPoint(15 + i * 2 * 1.5 + 1, 24 + i * 3)),
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
										...Object.values(getPoint(88 - (i - 5) * 1.5, 4)),
										...Object.values(getPoint(88 - i * 1.5, 16)),
								  ]
								: [...Object.values(getPoint(88 - i * 1.5, 4)), ...Object.values(getPoint(88 - i * 1.5, 16))]
						}
						stroke="white"
						strokeWidth={strokeWidth / 3}
					/>
				))}
				<Shape
					{...getPoint(87, 46)}
					sceneFunc={ctx => {
						switch (scope) {
							case SCOPE_PLAYER_1:
								ctx.rotate((transposed ? 0.5 : 1) * Math.PI)
								break
							case SCOPE_PLAYER_2:
								ctx.rotate((transposed ? 1.5 : 0) * Math.PI)
								break
							default:
							//noop
						}
						ctx.fillStyle = 'white'
						ctx.font = `2rem Arial`
						ctx.fillText(score.one, 0, 0)
						ctx.fill()
					}}
				/>
				<Shape
					{...getPoint(50, 45)}
					sceneFunc={ctx => {
						switch (scope) {
							case SCOPE_PLAYER_1:
								ctx.rotate((transposed ? 0.5 : 1) * Math.PI)
								break
							case SCOPE_PLAYER_2:
								ctx.rotate((transposed ? 1.5 : 0) * Math.PI)
								break
							default:
							//noop
						}
						ctx.fillStyle = 'rgba(255,255,255,0.2)'
						ctx.textAlign = 'center'
						ctx.textBaseline = 'middle'
						ctx.font = `8rem Arial`
						ctx.fillText(getNumericScore(score), 0, 0)
						ctx.fill()
					}}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)

Score.propTypes = {
	scope: PropTypes.string.isRequired,
	score: PropTypes.object.isRequired,
}

export default Score
