import React from 'react'
import PropTypes from 'prop-types'
import { pointShape } from '../../../constants/prop-types'

import { Line, Shape } from 'react-konva'
import { keyboardStrokeColor, keyboardFillColor } from '../../../constants/board'

const Key = ({ bottomLeft, topRight, textPosition, text, rotation, onStrike, bgProps, fgProps }) => [
	<Line
		key="bg"
		points={[
			...Object.values(bottomLeft),
			...[topRight.x, bottomLeft.y],
			...Object.values(topRight),
			...[bottomLeft.x, topRight.y],
		]}
		stroke={keyboardStrokeColor}
		fill={keyboardFillColor}
		closed
		{...bgProps}
		{...(onStrike
			? {
					onClick: onStrike,
					onTap: onStrike,
					onMouseEnter: () => {
						// eslint-disable-next-line no-undef
						window.document.body.style.cursor = 'pointer'
					},
					onMouseLeave: () => {
						// eslint-disable-next-line no-undef
						window.document.body.style.cursor = 'default'
					},
			  }
			: {})}
	/>,
	<Shape
		key="fg"
		{...textPosition}
		sceneFunc={ctx => {
			ctx.rotate(rotation)
			ctx.fillStyle = keyboardStrokeColor
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.font = `1.7rem Arial`
			if (fgProps) {
				Object.entries(fgProps).forEach(([prop, value]) => {
					ctx[prop] = value
				})
			}
			ctx.fillText(text, 0, 0)
		}}
	/>,
]

Key.propTypes = {
	bottomLeft: pointShape.isRequired,
	topRight: pointShape.isRequired,
	textPosition: pointShape.isRequired,
	text: PropTypes.string.isRequired,
	rotation: PropTypes.number.isRequired,
	onStrike: PropTypes.func,
	bgProps: PropTypes.object,
}

export default Key
