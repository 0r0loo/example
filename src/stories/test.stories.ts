import type { Meta, StoryObj } from '@storybook/react-vite';
import { Test } from './test.tsx';

const meta = {
  component: Test,
} satisfies Meta<typeof Test>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
