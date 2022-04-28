import React from 'react'
import PropTypes from 'prop-types'
import { pointShape } from '../../../constants/prop-types'
import { onClick } from '../../../helpers/ui'

import { keyboardStrokeColor, keyboardStrokeColorDisabled } from '../../../constants/board'

import { Line, Path } from 'react-konva/lib/ReactKonvaCore'
import 'konva/lib/shapes/Line'
import 'konva/lib/shapes/Path'

const IconButton = ({
	bottomLeft,
	topRight,
	iconPosition,
	iconScale,
	iconPath,
	onStrike,
	disabled,
	rotation,
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
		fill={debug ? 'rgba(93,121,255,.2)' : 'transparent'}
		{...(onStrike && !disabled ? onClick(onStrike) : {})}
		closed
		{...bgProps}
	/>,
	<Path
		key="fg"
		{...iconPosition}
		fill={disabled ? keyboardStrokeColorDisabled : keyboardStrokeColor}
		data={iconPath}
		scale={iconScale}
		rotation={rotation}
		{...(onStrike && !disabled ? onClick(onStrike) : {})}
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
	rotation: PropTypes.number,
	fgProps: PropTypes.object,
	bgProps: PropTypes.object,
	debug: PropTypes.bool,
}

export default IconButton
