export const onClick = (onStrike) => ({
	onTouchstart: onStrike,
	onClick: onStrike,
	onMouseEnter: () => {
		// eslint-disable-next-line no-undef
		window.document.body.style.cursor = 'pointer'
	},
	onMouseLeave: () => {
		// eslint-disable-next-line no-undef
		window.document.body.style.cursor = 'default'
	},
})
