import { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Common: Story = {
  args: {},
};
