import type { Meta, StoryObj } from '@storybook/react';

import { Count } from './count';

const meta = {
  title: 'Count/Count',
  component: Count,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {

};
