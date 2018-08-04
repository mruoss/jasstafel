import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Image } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'
import withSizes from 'react-sizes'
import { Promise } from 'bluebird'

export const getSchiefer = () => {
	if (window.schieferImage) {
		return window.schieferImage
	}
	window.schieferImage = new Promise(resolve => {
		const image = window.schieferImage || new window.Image()
		image.src = 'assets/schiefer.jpg'
		image.onload = () => {
			// setState will redraw layer
			// because "image" property is changed
			resolve(image)
		}
	})
	return window.schieferImage
}

const enhance = compose(
	withSizes(props => props),
	withState('schiefer', 'setSchiefer', null),
	lifecycle({
		componentDidMount() {
			const props = this.props
			getSchiefer().then(image => {
				image.width = props.width
				image.height = props.height
				this.props.setSchiefer(image)
			})
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

const Blackboard = ({ schiefer }) => <Layer>{schiefer && <Image image={schiefer} />}</Layer>

Blackboard.propTypes = {
	schiefer: PropTypes.object,
}

export default enhance(Blackboard)
