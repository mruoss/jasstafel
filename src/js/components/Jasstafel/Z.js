import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Line } from 'react-konva'
import { compose } from 'recompose'
import { withDimensions } from '../../utils/drawing'
import { zColor, strokeWidth } from '../../utils/constants'

const enhance = compose(withDimensions)

const Z = ({ otherPlayer = false, getPointForPlayer }) => (
	<Layer>
		<Line
			points={[
				...Object.values(getPointForPlayer(90, 10, otherPlayer)),
				...Object.values(getPointForPlayer(10, 10, otherPlayer)),
				...Object.values(getPointForPlayer(90, 90, otherPlayer)),
				...Object.values(getPointForPlayer(10, 90, otherPlayer)),
			]}
			stroke={zColor}
			strokeWidth={strokeWidth}
		/>
	</Layer>
)
Z.propTypes = {
	otherPlayer: PropTypes.bool,
	getPointForPlayer: PropTypes.func.isRequired,
}

export default enhance(Z)
