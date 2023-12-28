import type { Meta, StoryObj } from '@storybook/react'

import Pacman from './Pacman'

const meta: Meta<typeof Pacman> = {
	component: Pacman,
}

type Story = StoryObj<typeof Pacman>

export const Primary: Story = {
	render: args => <Pacman {...args} />,
	argTypes: {
		width: { type: 'number' },
		height: { type: 'number' },
		headOpenTime: { type: 'number' },
		headColor: { type: 'string' },
		headMaxRotation: { type: 'number' },
		spawnDistance: { type: 'number' },
		dotSize: { type: 'number' },
		dotMoveTime: { type: 'number' },
		dotColor: { type: 'string' },
	},
}

export default meta
