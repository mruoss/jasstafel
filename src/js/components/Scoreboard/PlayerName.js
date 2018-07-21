import React from 'react'
import PropTypes from 'prop-types'

import { onClick } from '../../helpers/ui'

import { fontText } from '../../constants/board'

import { Layer, Shape, Line } from 'react-konva'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'

const askForName = (scope, oldName, setPlayerName) => {
	const newName = window.prompt('Spielername:', oldName)
	setPlayerName(scope, newName)
}

const PlayerName = ({ scope, name, setPlayerName }) => (
	<DimensionsConsumer scope={scope}>
		{({ getPoint, rotation }) => (
			<Layer>
				<Line
					points={[
						...Object.values(getPoint(12, 76)),
						...Object.values(getPoint(12, 82)),
						...Object.values(getPoint(40, 82)),
						...Object.values(getPoint(40, 76)),
					]}
					closed
					{...onClick(() => askForName(scope, name, setPlayerName))}
				/>
				<Shape
					{...getPoint(12, 77)}
					sceneFunc={ctx => {
						ctx.rotate(rotation)
						ctx.font = `3vmin ${fontText}`
						ctx.fillStyle = '#ffffff'
						ctx.fillText(name, 0, 0)
					}}
				/>
			</Layer>
		)}
	</DimensionsConsumer>
)
PlayerName.propTypes = {
	scope: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	setPlayerName: PropTypes.func.isRequired,
}

export default PlayerName
