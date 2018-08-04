import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Scoreboard from './Scoreboard'
import Backside from './Backside'
import Flipper from './Flipper'

import { selectisBoardFlipped } from '../selectors/ui'

const mapStateToProps = state => ({
	isBoardFlipped: selectisBoardFlipped(state),
})

const enhance = connect(mapStateToProps)

const Jasstafel = ({ store, isBoardFlipped }) => (
	<Flipper
		width="100vw"
		height="100vh"
		flipped={isBoardFlipped}
		renderFrontside={() => <Scoreboard store={store} />}
		renderBackside={() => <Backside store={store} />}
	/>
)

Jasstafel.propTypes = {
	store: PropTypes.object.isRequired,
	isBoardFlipped: PropTypes.bool.isRequired,
}

export default enhance(Jasstafel)
