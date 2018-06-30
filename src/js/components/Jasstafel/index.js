import React from 'react'
import PropTypes from 'prop-types'
import { Stage, Layer, Line } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'
import { withDimensions } from '../../utils/drawing'
import { zColor, strokeWidth } from '../../utils/constants'

import Blackboard from '../Blackboard'
import Score from './Score'
import TouchScreen from './TouchScreen'
import Z from './Z'

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

const Jasstafel = ({ width, height, getPointOnCanvas }) => {
	return (
		<Stage width={width} height={height} left={0} top={0}>
			<Blackboard />
			<Z />
			<Z otherPlayer />
			<Layer>
				<Line
					points={[...Object.values(getPointOnCanvas(2, 50)), ...Object.values(getPointOnCanvas(98, 50))]}
					stroke={zColor}
					strokeWidth={strokeWidth}
				/>
			</Layer>

			<Score score={{ hundred: 13, fifty: 20, twenty: 22, one: 5 }} />
			<Score otherPlayer score={{ hundred: 13, fifty: 7, twenty: 22, one: 7 }} />

			<TouchScreen
				onClickHundred={() => {
					window.console.log('P1 onClickHundred')
				}}
				onClickFifty={() => {
					window.console.log('P1 onClickFifty')
				}}
				onClickTwenty={() => {
					window.console.log('P1 onClickTwenty')
				}}
				onClickOne={() => {
					window.console.log('P1 onClickOne')
				}}
				debug
			/>
			<TouchScreen
				otherPlayer
				onClickHundred={() => {
					window.console.log('P2 onClickHundred')
				}}
				onClickFifty={() => {
					window.console.log('P2 onClickFifty')
				}}
				onClickTwenty={() => {
					window.console.log('P2 onClickTwenty')
				}}
				onClickOne={() => {
					window.console.log('P2 onClickOne')
				}}
				debug
			/>
		</Stage>
	)
}
// <Score
// />
Jasstafel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	getPointForPlayer: PropTypes.func.isRequired,
	getPointOnCanvas: PropTypes.func.isRequired,
	schiefer: PropTypes.object,
}

export default enhance(Jasstafel)
