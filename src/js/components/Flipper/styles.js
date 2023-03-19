import styled from 'styled-components'

const FlipperSide = styled.div`
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
`

export const Flipper = styled.div`
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
	transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`

export const FrontSide = styled(FlipperSide)`
	z-index: 2;
`

export const BackSide = styled(FlipperSide)`
	z-index: 2;
	transform: rotateY(180deg);
`

export const Container = styled.div`
	perspective: 1000px;

	${FrontSide}, ${BackSide} {
		width: ${({ width }) => width};
		height: ${({ height }) => height};
	}
`
