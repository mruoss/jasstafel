import React from 'react'
import PropTypes from 'prop-types'
import { pointShape } from '../../../constants/prop-types'
import { getIconChar } from '../../../helpers/icons'

import { keyboardStrokeColor, keyboardStrokeColorDisabled } from '../../../constants/board'

import { Line, Shape } from 'react-konva'

const IconButton = ({ bottomLeft, topRight, textPosition, charUnicode, onStrike, disabled, debug }) => [
	<Line
		key="bg"
		points={[
			...Object.values(bottomLeft),
			...[topRight.x, bottomLeft.y],
			...Object.values(topRight),
			...[bottomLeft.x, topRight.y],
		]}
		fill={debug && 'rgba(93,121,255,.2)'}
		{...(onStrike && !disabled
			? {
					onTouchstart: onStrike,
					onClick: onStrike,
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
		closed
	/>,
	<Shape
		key="fg"
		{...textPosition}
		sceneFunc={ctx => {
			ctx.fillStyle = disabled ? keyboardStrokeColorDisabled : keyboardStrokeColor
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.font = '1.5rem "Font Awesome 5 Free"'
			ctx.fillText(getIconChar(charUnicode), 0, 0)
		}}
	/>,
]

IconButton.propTypes = {
	bottomLeft: pointShape.isRequired,
	topRight: pointShape.isRequired,
	textPosition: pointShape.isRequired,
	charUnicode: PropTypes.string.isRequired,
	onStrike: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	debug: PropTypes.bool,
}

export default IconButton
