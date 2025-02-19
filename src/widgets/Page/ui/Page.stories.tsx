import { Meta, StoryObj } from "@storybook/react";

import { Page } from "./Page";

const meta: Meta<typeof Page> = {
  title: "shared/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Common: Story = {
  args: {
    children: <div>{"ПРИВЕТ"}</div>,
  },
};
