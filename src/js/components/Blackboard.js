import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Image } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'
import { withDimensions } from '../utils/drawing'

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

const Schiefertafel = ({ schiefer }) => <Layer>{schiefer && <Image image={schiefer} />}</Layer>
// <Score
// />
Schiefertafel.propTypes = {
	schiefer: PropTypes.object,
}

export default enhance(Schiefertafel)
