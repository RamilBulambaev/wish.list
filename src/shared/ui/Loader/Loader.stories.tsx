import { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Common: Story = {
  args: {},
};
