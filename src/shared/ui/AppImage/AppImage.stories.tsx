import { Meta, StoryObj } from "@storybook/react";

import { AppImage } from "./AppImage";

const meta: Meta<typeof AppImage> = {
  title: "shared/ui/AppImage",
  component: AppImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Common: Story = {
  args: {},
};
