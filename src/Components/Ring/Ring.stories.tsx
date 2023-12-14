import type { Meta, StoryObj } from '@storybook/react'

import Ring from './Ring'

const meta: Meta<typeof Ring> = {
	component: Ring,
}

type Story = StoryObj<typeof Ring>

export const Primary: Story = {
	render: args => <Ring {...args} />,
	argTypes: {
		width: { type: 'number' },
		height: { type: 'number' },
		outlineWidth: { type: 'number' },
		fullRotationTime: { type: 'number' },
		color: { type: 'string' },
		backgroundColor: { type: 'string' },
	},
	args: {
		width: 50,
		height: 50,
		outlineWidth: 5,
		fullRotationTime: 1,
		color: '#00ff00',
		backgroundColor: '#ff0000',
	},
}

export default meta
