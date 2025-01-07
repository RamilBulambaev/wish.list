import { Meta, StoryObj } from "@storybook/react";

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Common: Story = {
  args: {},
};