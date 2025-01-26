import { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Common: Story = {
  args: {},
};