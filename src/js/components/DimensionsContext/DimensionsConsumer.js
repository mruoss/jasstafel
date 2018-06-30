import React from 'react'
import PropTypes from 'prop-types'

import { DimensionsContext } from './context'

const DimensionsConsumer = ({ scope, children }) => (
	<DimensionsContext.Consumer>
		{dimensions => {
			return children(dimensions[scope])
		}}
	</DimensionsContext.Consumer>
)

DimensionsConsumer.propTypes = {
	children: PropTypes.func.isRequired,
	scope: PropTypes.string.isRequired,
}

export default DimensionsConsumer
