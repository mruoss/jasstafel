import React from 'react'

import { Group, Shape } from 'react-konva'
import { fontText } from '../../constants/board'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { SCOPE_GLOBAL } from '../DimensionsContext/context'
import UseDimensionsContext from '../DimensionsContext/UseDimensionsContext'

const Version = () => {
	const { getPoint, rotation } = UseDimensionsContext(SCOPE_GLOBAL)

	return (
		<Group>
			<Shape
				{...getPoint(98, 98)}
				sceneFunc={(ctx) => {
					ctx.rotate(rotation)
					ctx.textAlign = 'right'
					ctx.font = `1.5vmin ${fontText}`
					ctx.fillStyle = '#ffffff'
					ctx.fillText(`Version ${APP_VERSION}`, 0, 0)
				}}
			/>
		</Group>
	)
}

export default Version
