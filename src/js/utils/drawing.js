import withSizes from 'react-sizes'

const mapPlayerBoardY = (position, otherPlayer) => (otherPlayer ? 100 - position / 2 : position / 2)
const mapPlayerBoardX = (position, otherPlayer) => (otherPlayer ? position : 100 - position)

export const withDimensions = withSizes(({ width, height }) => {
	const boardWidth = width > height ? height * 0.8 : width
	const getPointByPercentage = (x, y) => ({ x: (boardWidth / 100) * x, y: (height / 100) * y })
	return {
		width: boardWidth,
		height,
		getPointOnCanvas: getPointByPercentage,
		getPointForPlayer: (x, y, otherPlayer) =>
			getPointByPercentage(mapPlayerBoardX(x, otherPlayer), mapPlayerBoardY(y, otherPlayer)),
	}
})

export const zColor = '#bc1818'
export const strokeWidth = 6
