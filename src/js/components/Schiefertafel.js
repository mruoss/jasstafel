import React from 'react'
import PropTypes from 'prop-types'
import { Stage, Layer, Image, Line } from 'react-konva'
import { compose, withState, lifecycle } from 'recompose'
import { withDimensions, zColor, strokeWidth } from '../utils/drawing'

import Score from './Score'
import TouchScreen from './TouchScreen'

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

const Schiefertafel = ({ width, height, getPointForPlayer, getPointOnCanvas, schiefer }) => {
	const Z = ({ otherPlayer = false }) => (
		<Line
			points={[
				...Object.values(getPointForPlayer(90, 10, otherPlayer)),
				...Object.values(getPointForPlayer(10, 10, otherPlayer)),
				...Object.values(getPointForPlayer(90, 90, otherPlayer)),
				...Object.values(getPointForPlayer(10, 90, otherPlayer)),
			]}
			stroke={zColor}
			strokeWidth={strokeWidth}
		/>
	)
	Z.propTypes = {
		otherPlayer: PropTypes.bool,
	}

	return (
		<Stage width={width} height={height} left={0} top={0}>
			<Layer>{schiefer && <Image image={schiefer} />}</Layer>
			<Layer>
				<Z />
				<Line
					points={[...Object.values(getPointOnCanvas(2, 50)), ...Object.values(getPointOnCanvas(98, 50))]}
					stroke={zColor}
					strokeWidth={strokeWidth}
				/>
				<Z otherPlayer />
			</Layer>
			<Score score={{ hundred: 13, fifty: 20, twenty: 22, one: 5 }} />
			<Score otherPlayer score={{ hundred: 13, fifty: 7, twenty: 22, one: 7 }} />
			<TouchScreen
				onClickHundred={() => {
					console.log('P1 onClickHundred')
				}}
				onClickFifty={() => {
					console.log('P1 onClickFifty')
				}}
				onClickTwenty={() => {
					console.log('P1 onClickTwenty')
				}}
				onClickOne={() => {
					console.log('P1 onClickOne')
				}}
				debug
			/>
			<TouchScreen
				otherPlayer
				onClickHundred={() => {
					console.log('P2 onClickHundred')
				}}
				onClickFifty={() => {
					console.log('P2 onClickFifty')
				}}
				onClickTwenty={() => {
					console.log('P2 onClickTwenty')
				}}
				onClickOne={() => {
					console.log('P2 onClickOne')
				}}
				debug
			/>
		</Stage>
	)
}
// <Score
// />
Schiefertafel.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	getPointForPlayer: PropTypes.func.isRequired,
	getPointOnCanvas: PropTypes.func.isRequired,
	schiefer: PropTypes.object,
}

export default enhance(Schiefertafel)
