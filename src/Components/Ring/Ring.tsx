import { styled } from '@linaria/react'

const Ring = styled.span<{
	width: number
	height: number
	outlineWidth: number
	fullRotationTime: number
	color: string
	backgroundColor: string
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border: ${props => props.outlineWidth}px solid
		${props => props.backgroundColor};
	border-bottom-color: ${props => props.color};
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation ${props => props.fullRotationTime}s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default Ring
