import React from 'react'
import PropTypes from 'prop-types'
import { Image, Layer, Line } from 'react-konva'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { zColor, strokeWidth } from '../../constants/board'
import UseDimensionsContext from '../DimensionsContext/UseDimensionsContext'
import { SCOPE_GLOBAL } from '../DimensionsContext/context'

const Z = ({ scope }) => {
	const { getPoint } = UseDimensionsContext(scope)
	return <Line
		hitStrokeWidth={0}
		points={[
			...Object.values(getPoint(90, 10)),
			...Object.values(getPoint(10, 10)),
			...Object.values(getPoint(90, 90)),
			...Object.values(getPoint(10, 90)),
		]}
		stroke={zColor}
		strokeWidth={strokeWidth}
	/>
}

Z.propTypes = {
	scope: PropTypes.string.isRequired,
}

export default Z
