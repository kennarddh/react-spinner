import { styled } from '@linaria/react'

const Spinner2LayersHalfInner = styled.span<{
	width: number
	height: number
	innerWidth: number
	innerHeight: number
	outlineWidth: number
	innerOutlineWidth: number
	fullRotationTime: number
	backgroundColor: string
	innerBackgroundColor: string
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border: ${props => props.outlineWidth}px solid
		${props => props.backgroundColor};
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	animation: rotation ${props => props.fullRotationTime}s linear infinite;

	&::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: ${props => props.innerWidth}px;
		height: ${props => props.innerHeight}px;
		border-radius: 50%;
		border: ${props => props.innerOutlineWidth}px solid transparent;
		border-color: ${props => props.innerBackgroundColor} transparent;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default Spinner2LayersHalfInner
