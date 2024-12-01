import { Meta, StoryObj } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Common: Story = {
  args: {},
};
