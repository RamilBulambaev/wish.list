import { Meta, StoryObj } from "@storybook/react";

import { ErrorPage } from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "widget/ErrorPage",
  component: ErrorPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Common: Story = {
  args: {},
};
