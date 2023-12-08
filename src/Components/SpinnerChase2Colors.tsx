import { styled } from '@linaria/react'

const SpinnerChase2Colors = styled.span<{
	width: number
	height: number
	outlineWidth: number
	fullRotationTime: number
	fullRotationTimeChase: number
	backgroundColor: string
	backgroundColorChase: string
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: 50%;
	position: relative;
	animation: rotate ${props => props.fullRotationTime}s linear infinite;

	&:is(::before, ::after) {
		content: '';
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: ${props => props.outlineWidth}px solid
			${props => props.backgroundColor};
		animation: prixClipFix ${props => props.fullRotationTimeChase}s linear
			infinite;
	}

	&::after {
		transform: rotate3d(90, 90, 0, 180deg);
		border-color: ${props => props.backgroundColorChase};
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		50% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		75%,
		100% {
			clip-path: polygon(
				50% 50%,
				0 0,
				100% 0,
				100% 100%,
				100% 100%,
				100% 100%
			);
		}
	}
`

export default SpinnerChase2Colors
