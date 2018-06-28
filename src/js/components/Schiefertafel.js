import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'
import { Stage, Layer, Image, Line } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'

const zColor = '#bc1818'
const zStrokeWidth = 6

const enhance = compose(
	withSizes(props => props),
	withState('schiefer', 'setSchiefer', null),
	lifecycle({
		componentDidMount() {
			const props = this.props
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
			this.props.schiefer.height = this.props.height
			this.props.schiefer.width = this.props.width
		},
	}),
)

const Schiefertafel = ({ width, height, schiefer }) => {
	const getPoint = (x, y) => [width * 0.01 * x, height * 0.01 * y]
	return (
		<Stage width={width} height={height} left={0} top={0}>
			<Layer>{schiefer && <Image image={schiefer} />}</Layer>
			<Layer>
				<Line
					points={[...getPoint(10, 5), ...getPoint(90, 5), ...getPoint(10, 45), ...getPoint(90, 45)]}
					stroke={zColor}
					strokeWidth={zStrokeWidth}
				/>
				<Line points={[...getPoint(2, 50), ...getPoint(98, 50)]} stroke={zColor} strokeWidth={zStrokeWidth} />
				<Line
					points={[...getPoint(10, 55), ...getPoint(90, 55), ...getPoint(10, 95), ...getPoint(90, 95)]}
					stroke={zColor}
					strokeWidth={zStrokeWidth}
				/>
			</Layer>
		</Stage>
	)
}
Schiefertafel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default enhance(Schiefertafel)
