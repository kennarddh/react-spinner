import { styled } from '@linaria/react'

const Spinner2Layers = styled.span<{
	width: number
	height: number
	outlineWidth: number
	fullRotationTime: number
	fullRotationTimeChase: number
	fullRotationTime2: number
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
		inset: 8px;
		transform: rotate3d(90, 90, 0, 180deg);
		border-color: ${props => props.backgroundColorChase};
		animation:
			prixClipFix ${props => props.fullRotationTimeChase}s linear infinite,
			rotate ${props => props.fullRotationTime2}s linear infinite reverse;
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

export default Spinner2Layers
