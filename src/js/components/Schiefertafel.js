import React from 'react'
import PropTypes from 'prop-types'
import { Stage, Layer, Image, Line } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'
import { withDimensions, zColor, strokeWidth } from '../utils/drawing'

import Score from './Score'

const enhance = compose(
	withDimensions,
	withState('schiefer', 'setSchiefer', null),
	lifecycle({
		componentDidMount() {
			const props = this.props
			// eslint-disable-next-line no-undef
			const image = new window.Image()
			image.src = 'assets/schiefer.jpg'
			image.width = props.width
			image.height = props.height
			image.onload = () => {
				// setState will redraw layer
				// because "image" property is changed
				this.props.setSchiefer(image)
			}
		},
		componentDidUpdate() {
			const { width, height, schiefer } = this.props
			if (schiefer) {
				schiefer.height = height
				schiefer.width = width
			}
		},
	}),
)

const Schiefertafel = ({ width, height, getPoint, schiefer }) => {
	return (
		<Stage width={width} height={height} left={0} top={0}>
			<Layer>{schiefer && <Image image={schiefer} />}</Layer>
			<Layer>
				<Line
					points={[...getPoint(10, 5), ...getPoint(90, 5), ...getPoint(10, 45), ...getPoint(90, 45)]}
					stroke={zColor}
					strokeWidth={strokeWidth}
				/>
				<Line points={[...getPoint(2, 50), ...getPoint(98, 50)]} stroke={zColor} strokeWidth={strokeWidth} />
				<Line
					points={[...getPoint(10, 55), ...getPoint(90, 55), ...getPoint(10, 95), ...getPoint(90, 95)]}
					stroke={zColor}
					strokeWidth={strokeWidth}
				/>
			</Layer>
			<Score
				player1={{ hundred: 13, fifty: 40, twenty: 22, one: 5 }}
				player2={{ hundred: 13, fifty: 7, twenty: 22, one: 7 }}
			/>
		</Stage>
	)
}
Schiefertafel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	getPoint: PropTypes.func.isRequired,
	schiefer: PropTypes.object,
}

export default enhance(Schiefertafel)
