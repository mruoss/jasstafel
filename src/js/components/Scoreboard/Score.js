import React from 'react'
import PropTypes from 'prop-types'
import { strokeWidth, fontText } from '../../constants/board'
import { scoreShape } from '../../constants/prop-types'

import { Group, Line, Shape } from 'react-konva/lib/ReactKonvaCore'
import 'konva/lib/shapes/Line'
import { getNumericScore } from '../../helpers/score'
import UseDimensionsContext from '../DimensionsContext/UseDimensionsContext'

const Score = ({ scope, score }) => {
	const { getPoint, rotation } = UseDimensionsContext(scope)
	return <Group hitStrokeWidth={0}>
		{[...Array(score.thousand)].map((_, i) => [
			<Line
				key={`thousand-${i}-1`}
				points={[
					...Object.values(getPoint(88 - (i + 0.7) * 5, 96)),
					...Object.values(getPoint(88 - i * 5, 84)),
				]}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>,
			<Line
				key={`thousand-${i}-2`}
				points={[
					...Object.values(getPoint(88 - (i + 0.7) * 5, 84)),
					...Object.values(getPoint(88 - i * 5, 96)),
				]}
				stroke="white"
				strokeWidth={strokeWidth / 3}
			/>,
		])}
		{[...Array(score.fivehundred)].map((_, i) => {
			const shift = score.thousand * 5 + 0.7
			return [
				<Line
					key={`fivehundred-${i}-1`}
					points={[
						...Object.values(getPoint(88 - shift - (i + 0.3) * 5, 84)),
						...Object.values(getPoint(88 - shift - i * 5, 96)),
					]}
					stroke="white"
					strokeWidth={strokeWidth / 3}
				/>,
				<Line
					key={`fivehundred-${i}-2`}
					points={[
						...Object.values(getPoint(88 - shift - (i + 0.6) * 5, 96)),
						...Object.values(getPoint(88 - shift - (i + 0.3) * 5, 84)),
					]}
					stroke="white"
					strokeWidth={strokeWidth / 3}
				/>,
			]
		})}
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
				thousand
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
				ctx.rotate(rotation)
				ctx.fillStyle = 'white'
				ctx.font = `6vmin ${fontText}`
				ctx.fillText(score.one, 0, 0)
			}}
		/>
		<Shape
			{...getPoint(50, 45)}
			sceneFunc={ctx => {
				ctx.rotate(rotation)
				ctx.fillStyle = 'rgba(255,255,255,0.2)'
				ctx.textAlign = 'center'
				ctx.textBaseline = 'middle'
				ctx.font = `24vmin ${fontText}`
				ctx.fillText(getNumericScore(score), 0, 0)
			}}
		/>
	</Group>
}

Score.propTypes = {
	scope: PropTypes.string.isRequired,
	score: scoreShape.isRequired,
}

export default Score
