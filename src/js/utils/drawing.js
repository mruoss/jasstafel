import withSizes from 'react-sizes'

const mapPlayerBoardY = (position, otherPlayer) => (otherPlayer ? 100 - position / 2 : position / 2)
const mapPlayerBoardX = (position, otherPlayer) => (otherPlayer ? position : 100 - position)

export const withDimensions = withSizes(({ width, height }) => {
	const getPointByPercentage = (x, y) => ({ x: (width / 100) * x, y: (height / 100) * y })
	return {
		width,
		height,
		getPointOnCanvas: getPointByPercentage,
		getPointForPlayer: (x, y, otherPlayer) =>
			getPointByPercentage(mapPlayerBoardX(x, otherPlayer), mapPlayerBoardY(y, otherPlayer)),
	}
})

export const zColor = '#bc1818'
export const strokeWidth = 6
