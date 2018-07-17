import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'

import { DimensionsContext, SCOPE_GLOBAL, SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from './context'

const mapPlayerBoardY = (position, scope) => (scope === SCOPE_PLAYER_2 ? 100 - position / 2 : position / 2)
const mapPlayerBoardX = (position, scope) => (scope === SCOPE_PLAYER_2 ? position : 100 - position)

const withDimensions = withSizes(({ width, height }) => ({
	getDimensions: scope => {
		const transposed = false // width > height
		const iconScale = width / 10000
		const boardWidth = transposed ? height : width
		const boardHeight = transposed ? width : height
		const getPointByPercentage = (scopeX, scopeY) => {
			const boardX = scope === SCOPE_GLOBAL ? scopeX : mapPlayerBoardX(scopeX, scope)
			const boardY = scope === SCOPE_GLOBAL ? scopeY : mapPlayerBoardY(scopeY, scope)

			return {
				x: (width / 100) * (transposed ? boardY : boardX),
				y: (height / 100) * (transposed ? 100 - boardX : boardY),
			}
		}
		return {
			width: boardWidth,
			height: boardHeight,
			getPoint: getPointByPercentage,
			rotation: (scope === SCOPE_PLAYER_1 ? (transposed ? 0.5 : 1) : transposed ? 1.5 : 0) * Math.PI,
			iconScale: { x: iconScale, y: iconScale },
		}
	},
}))

const DimensionProvider = ({ children, getDimensions }) => (
	<DimensionsContext.Provider
		value={{
			[SCOPE_PLAYER_1]: getDimensions(SCOPE_PLAYER_1),
			[SCOPE_PLAYER_2]: getDimensions(SCOPE_PLAYER_2),
			[SCOPE_GLOBAL]: getDimensions(SCOPE_GLOBAL),
		}}
	>
		{children}
	</DimensionsContext.Provider>
)

DimensionProvider.propTypes = {
	children: PropTypes.node.isRequired,
	getDimensions: PropTypes.func.isRequired,
}

export default withDimensions(DimensionProvider)
