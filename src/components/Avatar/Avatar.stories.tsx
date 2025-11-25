import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?img=1',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const SingleName: Story = {
  args: {
    name: 'John',
  },
};

export const Small: Story = {
  args: {
    name: 'John Doe',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'John Doe',
    size: 'lg',
  },
};

export const LargeWithImage: Story = {
  args: {
    name: 'Jane Smith',
    src: 'https://i.pravatar.cc/150?img=5',
    size: 'lg',
  },
};
