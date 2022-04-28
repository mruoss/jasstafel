import React from 'react'
import PropTypes from 'prop-types'

import { DimensionsContext, SCOPE_GLOBAL, SCOPE_PLAYER_1, SCOPE_PLAYER_2 } from './context'
import useWindowSizes from '../../hooks/UseWindowSizes'

const mapPlayerBoardY = (position, scope) => (scope === SCOPE_PLAYER_2 ? 100 - position / 2 : position / 2)
const mapPlayerBoardX = (position, scope) => (scope === SCOPE_PLAYER_2 ? position : 100 - position)

const doRotate =
	(angle, { centerX, centerY }) =>
	({ x, y }) => ({
		x: (x - centerX) * Math.cos(angle) - (y - centerY) * Math.sin(angle) + centerX,
		y: (x - centerX) * Math.sin(angle) + (y - centerY) * Math.cos(angle) + centerY,
	})

const doScale =
	(scale, { width, height }) =>
	({ x, y }) => {
		if (!scale) return { x, y }
		return {
			x: ((x - width / 2) / height) * width + width / 2,
			y: ((y - height / 2) / width) * height + height / 2,
		}
	}

const DimensionProvider = ({ children }) => {
	const { width, height } = useWindowSizes()
	const iconScale = Math.min(width, height) / 10000
	const centerX = width / 2
	const centerY = height / 2
	const angle = width < height ? 0 : Math.PI / 2
	const angleDeg = width < height ? 0 : 90

	const rotate = doRotate(angle, { centerX, centerY })
	const rotateReverse = doRotate(-angle, { centerX, centerY })
	const scale = doScale(width > height, { width, height })
	const scaleReverse = doScale(width > height, { height, width })
	const getDimensions = (scope) => {
		const getScreenPointByPercentage = (scopeX, scopeY) => {
			const boardX = scope === SCOPE_GLOBAL ? scopeX : mapPlayerBoardX(scopeX, scope)
			const boardY = scope === SCOPE_GLOBAL ? scopeY : mapPlayerBoardY(scopeY, scope)
			return scale(
				rotate({
					x: (width / 100) * boardX,
					y: (height / 100) * boardY,
				}),
			)
		}
		const getScopePointByPercentage = (x, y) => {
			const { x: rotX, y: rotY } = scaleReverse(rotateReverse({ x, y }))
			return {
				x: (rotX * 100) / width,
				y: (rotY * 100) / height,
			}
		}
		return {
			width: width,
			height: height,
			getPoint: getScreenPointByPercentage,
			getPointReverse: getScopePointByPercentage,
			rotation: (scope === SCOPE_PLAYER_1 ? 1 : 0) * Math.PI + angle,
			rotationDeg: (scope === SCOPE_PLAYER_1 ? 180 : 0) + angleDeg,
			iconScale: { x: iconScale, y: iconScale },
		}
	}

	return width == undefined ? null : (
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
}

DimensionProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DimensionProvider
