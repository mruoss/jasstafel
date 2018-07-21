import PropTypes from 'prop-types'

export const pointShape = PropTypes.shape({
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
})

export const scoreShape = PropTypes.shape({
	thousand: PropTypes.number.isRequired,
	fivehundred: PropTypes.number.isRequired,
	hundred: PropTypes.number.isRequired,
	fifty: PropTypes.number.isRequired,
	twenty: PropTypes.number.isRequired,
	one: PropTypes.number.isRequired,
})
