import { FC, useMemo } from 'react'

import { styled } from '@linaria/react'

const PacmanHead = styled.span<{
	width: number
	height: number
	headOpenTime: number
	color: string
	flip?: boolean
	headMaxRotation: number
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;

	display: inline-block;
	box-sizing: border-box;

	border-radius: ${props =>
		!props.flip
			? `${props.width}px ${props.width}px 0 0`
			: `0 0 ${props.width}px ${props.width}px`};
	animation: rotation ${props => props.headOpenTime}s linear infinite;

	background-color: ${props => props.color};

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(
				${props =>
					props.flip
						? `${props.headMaxRotation}deg`
						: `-${props.headMaxRotation}deg`}
			);
		}
	}

	transform-origin: ${props => (props.flip ? 'top' : 'bottom')} center;

	z-index: 2;
`

const PacmanContainer = styled.div<{
	width: number
	height: number
}>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;

	display: flex;
	flex-direction: column;

	position: relative;
`

const PacmanFood = styled.span<{
	delay: number
	size: number
	color: string
	duration: number
	spawnDistance: number
}>`
	width: ${props => props.size}px;
	height: ${props => props.size}px;

	display: inline-block;
	box-sizing: border-box;

	border-radius: 50%;

	position: absolute;
	top: calc(50% - ${props => props.size / 2}px);
	left: calc(50% - ${props => props.size / 0.9}px);

	animation: rotation ${props => props.duration}s linear infinite;

	animation-delay: ${props => props.delay}s;

	background-color: ${props => props.color};

	@keyframes rotation {
		0% {
			translate: ${props => props.spawnDistance}px 0;
		}
		100% {
			translate: 0 0;
		}
	}
`

const Pacman: FC<{
	width?: number
	height?: number
	dotSize?: number
	headOpenTime?: number
	dotMoveTime?: number
	headColor?: string
	dotColor?: string
	headMaxRotation?: number
	spawnDistance?: number
}> = ({
	width = 50,
	height = 50,
	dotSize = 15,
	headOpenTime = 0.5,
	dotMoveTime = 2,
	headColor = '#ffd600',
	dotColor = '#fff1bf',
	headMaxRotation = 45,
	spawnDistance = 100,
}) => {
	const BaseFoodDelay = useMemo(
		() =>
			((spawnDistance - dotSize * 4) / 4) *
				(dotMoveTime / spawnDistance) +
			(dotSize / spawnDistance) * dotMoveTime,
		[dotMoveTime, dotSize, spawnDistance],
	)

	return (
		<PacmanContainer width={width} height={height}>
			<PacmanHead
				width={width}
				height={height / 2}
				headOpenTime={headOpenTime}
				color={headColor}
				headMaxRotation={headMaxRotation}
			/>
			<PacmanHead
				width={width}
				height={height / 2}
				headOpenTime={headOpenTime}
				color={headColor}
				flip
				headMaxRotation={headMaxRotation}
			/>
			<PacmanFood
				delay={0}
				color={dotColor}
				duration={dotMoveTime}
				size={dotSize}
				spawnDistance={spawnDistance}
			/>
			<PacmanFood
				delay={BaseFoodDelay}
				color={dotColor}
				duration={dotMoveTime}
				size={dotSize}
				spawnDistance={spawnDistance}
			/>
			<PacmanFood
				delay={BaseFoodDelay * 2}
				color={dotColor}
				duration={dotMoveTime}
				size={dotSize}
				spawnDistance={spawnDistance}
			/>
			<PacmanFood
				delay={BaseFoodDelay * 3}
				color={dotColor}
				duration={dotMoveTime}
				size={dotSize}
				spawnDistance={spawnDistance}
			/>
		</PacmanContainer>
	)
}

export default Pacman
