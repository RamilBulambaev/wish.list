import { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  args: { to: "/" },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.RED,
  },
};
