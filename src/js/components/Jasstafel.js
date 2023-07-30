import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Scoreboard from './Scoreboard'
import Backside from './Backside'
import Flipper from './Flipper'

import { selectisBoardFlipped } from '../selectors/ui'

const Jasstafel = ({ store }) => {
	const isBoardFlipped = useSelector(selectisBoardFlipped)

	return (
		<Flipper
			width="100vw"
			height="100vh"
			flipped={isBoardFlipped ? 1 : 0}
			renderFrontside={() => <Scoreboard store={store} />}
			renderBackside={() => <Backside store={store} />}
		/>
	)
}

Jasstafel.propTypes = {
	store: PropTypes.object.isRequired,
}

export default Jasstafel
