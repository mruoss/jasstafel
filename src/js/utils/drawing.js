import withSizes from 'react-sizes'

const getPointByPercentage = (width, height) => (x, y) => ({ x: (width / 100) * x, y: (height / 100) * y })
export const withDimensions = withSizes(({ width, height }) => ({
	width,
	height,
	getPoint: (x, y) => Object.values(getPointByPercentage(width, height)(x, y)),
	getPointObject: getPointByPercentage(width, height),
}))

export const zColor = '#bc1818'
export const strokeWidth = 6
