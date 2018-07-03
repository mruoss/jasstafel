import React from 'react'
import PropTypes from 'prop-types'
import { pointShape } from '../../../constants/prop-types'

import { Line, Shape } from 'react-konva'
import { strokeWidth, keyboardStrokeColor, keyboardFillColor } from '../../../constants/board'

const Key = ({ bottomLeft, topRight, textPosition, text, rotation, bgProps, fgProps }) => [
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
	/>,
	<Shape
		key="fg"
		{...textPosition}
		sceneFunc={ctx => {
			ctx.rotate(rotation)
			ctx.fillStyle = keyboardStrokeColor
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.font = `2rem Arial`
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
	bgProps: PropTypes.object,
}

export default Key
