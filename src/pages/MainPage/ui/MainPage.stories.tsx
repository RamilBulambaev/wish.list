import { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Common: Story = {
  args: {},
};
