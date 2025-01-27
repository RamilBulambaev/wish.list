import { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "shared/Overlay",
  component: Overlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Common: Story = {
  args: {},
};