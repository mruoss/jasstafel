import React from 'react'
import PropTypes from 'prop-types'

import * as FlipperComponents from './styles'

const Flipper = ({ width, height, flipped, renderFrontside, renderBackside }) => (
	<FlipperComponents.Container width={width} height={height}>
		<FlipperComponents.Flipper flipped={flipped}>
			<FlipperComponents.FrontSide>{renderFrontside()}</FlipperComponents.FrontSide>
			<FlipperComponents.BackSide>{renderBackside()}</FlipperComponents.BackSide>
		</FlipperComponents.Flipper>
	</FlipperComponents.Container>
)

Flipper.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	flipped: PropTypes.number.isRequired,
	renderFrontside: PropTypes.func.isRequired,
	renderBackside: PropTypes.func.isRequired,
}

export default Flipper
