import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Line } from 'react-konva'
import { compose } from 'recompose'
import { withDimensions } from '../utils/drawing'

const enhance = compose(withDimensions)

const TouchScreen = ({
	otherPlayer,
	getPointForPlayer,
	onClickHundred,
	onClickFifty,
	onClickTwenty,
	onClickOne,
	debug = false,
}) => (
	<Layer>
		<Line
			points={[
				...Object.values(getPointForPlayer(10, 2, otherPlayer)),
				...Object.values(getPointForPlayer(90, 2, otherPlayer)),
				...Object.values(getPointForPlayer(90, 18, otherPlayer)),
				...Object.values(getPointForPlayer(10, 18, otherPlayer)),
			]}
			fill={debug && 'rgba(93,121,255,.2)'}
			onClick={onClickTwenty}
			closed
		/>
		<Line
			points={[
				...Object.values(getPointForPlayer(10, 20, otherPlayer)),
				...Object.values(getPointForPlayer(70, 80, otherPlayer)),
				...Object.values(getPointForPlayer(90, 80, otherPlayer)),
				...Object.values(getPointForPlayer(30, 20, otherPlayer)),
			]}
			closed
			onClick={onClickFifty}
			fill={debug && 'rgba(93,121,255,.2)'}
		/>
		<Line
			points={[
				...Object.values(getPointForPlayer(10, 82, otherPlayer)),
				...Object.values(getPointForPlayer(90, 82, otherPlayer)),
				...Object.values(getPointForPlayer(90, 98, otherPlayer)),
				...Object.values(getPointForPlayer(10, 98, otherPlayer)),
			]}
			closed
			onClick={onClickHundred}
			fill={debug && 'rgba(93,121,255,.2)'}
		/>
		<Line
			points={[
				...Object.values(getPointForPlayer(80, 30, otherPlayer)),
				...Object.values(getPointForPlayer(80, 65, otherPlayer)),
				...Object.values(getPointForPlayer(95, 65, otherPlayer)),
				...Object.values(getPointForPlayer(95, 30, otherPlayer)),
			]}
			closed
			onClick={onClickOne}
			fill={debug && 'rgba(93,121,255,.2)'}
		/>
	</Layer>
)

TouchScreen.propTypes = {
	otherPlayer: PropTypes.bool,
	getPointForPlayer: PropTypes.func.isRequired,
	onClickHundred: PropTypes.func.isRequired,
	onClickFifty: PropTypes.func.isRequired,
	onClickTwenty: PropTypes.func.isRequired,
	onClickOne: PropTypes.func.isRequired,
	debug: PropTypes.bool,
}

export default enhance(TouchScreen)
