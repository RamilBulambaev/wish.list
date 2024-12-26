import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Common: Story = {
  args: {
    tabs: [
      {
        value: "tab 1",
        content: "tab 1",
      },
      {
        value: "tab 2",
        content: "tab 2",
      },
      {
        value: "tab 3",
        content: "tab 3",
      },
    ],
    value: "tab 2",
  },
};
