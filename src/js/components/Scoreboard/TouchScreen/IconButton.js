import React from 'react'
import PropTypes from 'prop-types'
import { pointShape } from '../../../constants/prop-types'

import { keyboardStrokeColor, keyboardStrokeColorDisabled } from '../../../constants/board'

import { Line, Path } from 'react-konva'

const IconButton = ({
	bottomLeft,
	topRight,
	iconPosition,
	iconScale,
	iconPath,
	onStrike,
	disabled,
	fgProps,
	bgProps,
	debug,
}) => [
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
		{...bgProps}
	/>,
	<Path
		key="fg"
		{...iconPosition}
		fill={disabled ? keyboardStrokeColorDisabled : keyboardStrokeColor}
		data={iconPath}
		scale={iconScale}
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
		{...fgProps}
	/>,
]

IconButton.propTypes = {
	bottomLeft: pointShape.isRequired,
	topRight: pointShape.isRequired,
	iconPosition: pointShape.isRequired,
	iconScale: pointShape.isRequired,
	iconPath: PropTypes.string.isRequired,
	onStrike: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	fgProps: PropTypes.object,
	bgProps: PropTypes.object,
	debug: PropTypes.bool,
}

export default IconButton
