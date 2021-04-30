import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { keyboardToPoints } from '../../../helpers/score'
import IconButton from '../TouchScreen/IconButton'
import { faBackspace, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

import { Group, Line } from 'react-konva'
import {
	keyboardMaskColor,
	keyboardSingleBgColor,
	keyboardDoubleBgColor,
	keyboardTripleBgColor,
	keyboardSwitchOn,
	keyboardSwitchOff,
	keyboardStrokeColor,
	keyboardFillColor,
	fontText,
} from '../../../constants/board'
import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import Key from './Key'
import UseDimensionsContext from '../../DimensionsContext/UseDimensionsContext'

const Keyboard = ({
	scope,
	onConfirm,
	closeKeyboard,
}) => {
	const [points, setPoints] = useState(0)
	const [complementOn, setComplementOn] = useState(true)

	const addDigit = (digit) => {
		const newNumber = 10 * points + digit
		setPoints(newNumber > 10000 ? points : newNumber)
	}
	const removeDigit = () => setPoints(Math.floor(points / 10))
	const resetPoints = () => setPoints(0)

	const { getPoint, rotation, rotationDeg, iconScale } = UseDimensionsContext(scope)

	return (
		<Group>
			<Line
				points={[
					...Object.values(getPoint(0, 0)),
					...Object.values(getPoint(0, 200)),
					...Object.values(getPoint(200, 200)),
					...Object.values(getPoint(200, 0)),
				]}
				fill={keyboardMaskColor}
				onClick={() => {
					resetPoints()
					closeKeyboard()
				}}
				onTouchstart={() => {
					resetPoints()
					closeKeyboard()
				}}
				closed
			/>
			<Key
				text={points.toString()}
				bottomLeft={getPoint(29, 129)}
				topRight={getPoint(71, 143)}
				textPosition={getPoint(50, 135.5)}
				rotation={rotation}
			/>
			<Key
				text="1"
				bottomLeft={getPoint(29, 115)}
				topRight={getPoint(43, 129)}
				textPosition={getPoint(36, 121.5)}
				rotation={rotation}
				onStrike={() => addDigit(1)}
			/>
			<Key
				text="2"
				bottomLeft={getPoint(43, 115)}
				topRight={getPoint(57, 129)}
				textPosition={getPoint(50, 121.5)}
				rotation={rotation}
				onStrike={() => addDigit(2)}
			/>
			<Key
				text="3"
				bottomLeft={getPoint(57, 115)}
				topRight={getPoint(71, 129)}
				textPosition={getPoint(64, 121.5)}
				rotation={rotation}
				onStrike={() => addDigit(3)}
			/>
			<Key
				text="4"
				bottomLeft={getPoint(29, 100)}
				topRight={getPoint(43, 115)}
				textPosition={getPoint(36, 107)}
				rotation={rotation}
				onStrike={() => addDigit(4)}
			/>
			<Key
				text="5"
				bottomLeft={getPoint(43, 100)}
				topRight={getPoint(57, 115)}
				textPosition={getPoint(50, 107)}
				rotation={rotation}
				onStrike={() => addDigit(5)}
			/>
			<Key
				text="6"
				bottomLeft={getPoint(57, 100)}
				topRight={getPoint(71, 115)}
				textPosition={getPoint(64, 107)}
				rotation={rotation}
				onStrike={() => addDigit(6)}
			/>
			<Key
				text="7"
				bottomLeft={getPoint(29, 87)}
				topRight={getPoint(43, 101)}
				textPosition={getPoint(36, 93)}
				rotation={rotation}
				onStrike={() => addDigit(7)}
			/>
			<Key
				text="8"
				bottomLeft={getPoint(43, 87)}
				topRight={getPoint(57, 101)}
				textPosition={getPoint(50, 93)}
				rotation={rotation}
				onStrike={() => addDigit(8)}
			/>
			<Key
				text="9"
				bottomLeft={getPoint(57, 87)}
				topRight={getPoint(71, 101)}
				textPosition={getPoint(64, 93)}
				rotation={rotation}
				onStrike={() => addDigit(9)}
			/>
			<Key
				text="0"
				bottomLeft={getPoint(29, 73)}
				topRight={getPoint(57, 87)}
				textPosition={getPoint(43, 79)}
				rotation={rotation}
				onStrike={() => addDigit(0)}
			/>
			<IconButton
				iconPath={faBackspace.icon[4]}
				iconScale={iconScale}
				bottomLeft={getPoint(57, 73)}
				topRight={getPoint(71, 87)}
				iconPosition={getPoint(61, 84)}
				rotation={rotationDeg}
				onStrike={removeDigit}
				bgProps={{
					stroke: keyboardStrokeColor,
					fill: keyboardFillColor,
				}}
			/>
			<Key
				text="Gegner Ergänzen:"
				bottomLeft={getPoint(29, 59)}
				topRight={getPoint(57, 73)}
				textPosition={getPoint(30, 66)}
				rotation={rotation}
				fgProps={{
					font: `3vmin ${fontText}`,
					textAlign: 'left',
				}}
				bgProps={{
					stroke: 'transparent',
					fill: 'transparent',
				}}
			/>
			<IconButton
				iconPath={(complementOn ? faToggleOn : faToggleOff).icon[4]}
				iconScale={iconScale}
				bottomLeft={getPoint(57, 59)}
				topRight={getPoint(71, 73)}
				iconPosition={getPoint(62, 70)}
				rotation={rotationDeg}
				onStrike={() => setComplementOn(!complementOn)}
				fgProps={{
					fill: complementOn ? keyboardSwitchOn : keyboardSwitchOff,
				}}
			/>
			<Key
				text="1x"
				bottomLeft={getPoint(29, 45)}
				topRight={getPoint(42, 59)}
				textPosition={getPoint(35.5, 51.5)}
				rotation={rotation}
				onStrike={() => {
					if (points < 1) {
						return
					}
					onConfirm(keyboardToPoints(points, 1, complementOn))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardSingleBgColor,
				}}
			/>
			<Key
				text="2x"
				bottomLeft={getPoint(43.5, 45)}
				topRight={getPoint(56.5, 59)}
				textPosition={getPoint(50, 51.5)}
				rotation={rotation}
				onStrike={() => {
					if (points < 1) {
						return
					}
					onConfirm(keyboardToPoints(points, 2, complementOn))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardDoubleBgColor,
				}}
			/>
			<Key
				text="3x"
				bottomLeft={getPoint(58, 45)}
				topRight={getPoint(71, 59)}
				textPosition={getPoint(64.5, 51.5)}
				rotation={rotation}
				onStrike={() => {
					if (points < 1) {
						return
					}
					onConfirm(keyboardToPoints(points, 3, complementOn))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardTripleBgColor,
				}}
			/>
			<Key
				text="257"
				bottomLeft={getPoint(29, 28)}
				topRight={getPoint(42, 42)}
				textPosition={getPoint(35.5, 34)}
				rotation={rotation}
				onStrike={() => {
					onConfirm(keyboardToPoints(257, 1, false))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardSingleBgColor,
				}}
			/>
			<Key
				text="514"
				bottomLeft={getPoint(43.5, 28)}
				topRight={getPoint(56.5, 42)}
				textPosition={getPoint(50, 34)}
				rotation={rotation}
				onStrike={() => {
					onConfirm(keyboardToPoints(257, 2, false))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardDoubleBgColor,
				}}
			/>
			<Key
				text="771"
				bottomLeft={getPoint(58, 28)}
				topRight={getPoint(71, 42)}
				textPosition={getPoint(64.5, 34)}
				rotation={rotation}
				onStrike={() => {
					onConfirm(keyboardToPoints(257, 3, false))
					resetPoints()
					closeKeyboard()
				}}
				bgProps={{
					fill: keyboardTripleBgColor,
				}}
			/>
		</Group>
	)
}

Keyboard.propTypes = {
	scope: PropTypes.string.isRequired,
	onConfirm: PropTypes.func.isRequired,
	closeKeyboard: PropTypes.func.isRequired,
}

export default Keyboard
