import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import PropTypes from 'prop-types'

import Scoreboard from './Scoreboard'

const Jasstafel = ({ store }) => (
	<ReduxProvider store={store}>
		<Scoreboard store={store} />
	</ReduxProvider>
)

Jasstafel.propTypes = {
	store: PropTypes.object.isRequired,
}

export default Jasstafel
