import React from 'react'

import { Layer, Shape } from 'react-konva'
import { fontText } from '../../constants/board'
import DimensionsConsumer from '../DimensionsContext/DimensionsConsumer'
import { SCOPE_GLOBAL } from '../DimensionsContext/context'
import UseDimensionsContext from '../DimensionsContext/UseDimensionsContext'

const Version = () => {
	const { getPoint, iconScale, getPointReverse } = UseDimensionsContext(SCOPE_GLOBAL)

	return (
		<Layer>
			<Shape
				{...getPoint(98, 98)}
				sceneFunc={ctx => {
					ctx.textAlign = 'right'
					ctx.font = `1.5vmin ${fontText}`
					ctx.fillStyle = '#ffffff'
					ctx.fillText(`Version ${APP_VERSION}`, 0, 0)
				}}
			/>
		</Layer>
	)
}

export default Version
