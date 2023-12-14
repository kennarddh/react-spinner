import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
	component: Spinner,
}

type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
	render: args => <Spinner {...args} />,
	argTypes: {
		width: { type: 'number', defaultValue: 50 },
		height: { type: 'number', defaultValue: 50 },
		outlineWidth: { type: 'number', defaultValue: 5 },
		fullRotationTime: { type: 'number', defaultValue: 1 },
		color: { type: 'string', defaultValue: '#00ff00' },
		backgroundColor: { type: 'string', defaultValue: '#ff0000' },
	},
}

export default meta
