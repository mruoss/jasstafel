import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Line } from 'react-konva'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { zColor, strokeWidth } from '../../utils/constants'

const Z = ({ scope }) => (
	<Layer>
		<DimensionsConsumer scope={scope}>
			{({ getPoint }) => (
				<Line
					points={[
						...Object.values(getPoint(90, 10)),
						...Object.values(getPoint(10, 10)),
						...Object.values(getPoint(90, 90)),
						...Object.values(getPoint(10, 90)),
					]}
					stroke={zColor}
					strokeWidth={strokeWidth}
				/>
			)}
		</DimensionsConsumer>
	</Layer>
)
Z.propTypes = {
	scope: PropTypes.string.isRequired,
}

export default Z
