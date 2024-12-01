import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Common: Story = {
  args: {},
};
