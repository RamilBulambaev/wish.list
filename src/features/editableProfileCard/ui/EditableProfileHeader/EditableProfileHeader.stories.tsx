import { Meta, StoryObj } from "@storybook/react";
import { EditableProfileHeader } from "./EditableProfileHeader";

const meta: Meta<typeof EditableProfileHeader> = {
  title: "features/EditableProfileHeader",
  component: EditableProfileHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditableProfileHeader>;

export default meta;
type Story = StoryObj<typeof EditableProfileHeader>;

export const Common: Story = {
  args: {},
};