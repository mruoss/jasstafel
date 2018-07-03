import React from 'react'
import PropTypes from 'prop-types'

import { Layer, Line, Shape } from 'react-konva'
import { keyboardStrokeColor, keyboardMatchFillColor } from '../../../constants/board'
import DimensionsConsumer from '../../DimensionsContext/DimensionsConsumer'
import Key from './Key'

const Keyboard = ({ scope }) => (
	<DimensionsConsumer scope={scope}>
		{({ getPoint, rotation }) => (
			<Layer
				sceneFunc={ctx => {
					ctx.rotate(rotation)
				}}
			>
				<Key
					text="1"
					bottomLeft={getPoint(29, 57)}
					topRight={getPoint(43, 71)}
					textPosition={getPoint(36, 63.5)}
					rotation={rotation}
				/>
				<Key
					text="2"
					bottomLeft={getPoint(43, 57)}
					topRight={getPoint(57, 71)}
					textPosition={getPoint(50, 63.5)}
					rotation={rotation}
				/>
				<Key
					text="3"
					bottomLeft={getPoint(57, 57)}
					topRight={getPoint(71, 71)}
					textPosition={getPoint(64, 63.5)}
					rotation={rotation}
				/>
				<Key
					text="4"
					bottomLeft={getPoint(29, 43)}
					topRight={getPoint(43, 57)}
					textPosition={getPoint(36, 49)}
					rotation={rotation}
				/>
				<Key
					text="5"
					bottomLeft={getPoint(43, 43)}
					topRight={getPoint(57, 57)}
					textPosition={getPoint(50, 49)}
					rotation={rotation}
				/>
				<Key
					text="6"
					bottomLeft={getPoint(57, 43)}
					topRight={getPoint(71, 57)}
					textPosition={getPoint(64, 49)}
					rotation={rotation}
				/>
				<Key
					text="7"
					bottomLeft={getPoint(29, 29)}
					topRight={getPoint(43, 43)}
					textPosition={getPoint(36, 35)}
					rotation={rotation}
				/>
				<Key
					text="8"
					bottomLeft={getPoint(43, 29)}
					topRight={getPoint(57, 43)}
					textPosition={getPoint(50, 35)}
					rotation={rotation}
				/>
				<Key
					text="9"
					bottomLeft={getPoint(57, 29)}
					topRight={getPoint(71, 43)}
					textPosition={getPoint(64, 35)}
					rotation={rotation}
				/>
				<Key
					text="0"
					bottomLeft={getPoint(43, 15)}
					topRight={getPoint(57, 29)}
					textPosition={getPoint(50, 21)}
					rotation={rotation}
				/>
				<Key
					text="256"
					bottomLeft={getPoint(29, 15)}
					topRight={getPoint(43, 29)}
					textPosition={getPoint(36, 21)}
					rotation={rotation}
					bgProps={{
						fill: keyboardMatchFillColor,
					}}
				/>
				<Key
					text={String.fromCharCode(parseInt('f55a', 16))}
					bottomLeft={getPoint(57, 15)}
					topRight={getPoint(71, 29)}
					textPosition={getPoint(63.5, 22)}
					rotation={rotation}
					fgProps={{
						font: '1.5rem "Font Awesome 5 Free"',
					}}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)

Keyboard.propTypes = {
	scope: PropTypes.string.isRequired,
}

export default Keyboard
