import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
	component: Spinner,
}

type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
	render: args => <Spinner {...args} />,
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
