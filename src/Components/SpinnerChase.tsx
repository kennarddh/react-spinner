import { styled } from '@linaria/react'

const SpinnerChase = styled.span<{
	width: number
	height: number
	outlineWidth: number
	fullRotationTime: number
	fullRotationTimeChase: number
	backgroundColor: string
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: 50%;
	position: relative;
	animation: rotate ${props => props.fullRotationTime}s linear infinite;

	&::before {
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

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		50% {
			clip-path: polygon(
				50% 50%,
				0 0,
				100% 0,
				100% 100%,
				100% 100%,
				100% 100%
			);
		}
		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
		}
		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
		}
	}
`

export default SpinnerChase
