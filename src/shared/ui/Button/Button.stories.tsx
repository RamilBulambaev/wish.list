import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};