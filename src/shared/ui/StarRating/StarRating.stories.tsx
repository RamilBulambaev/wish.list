import { Meta, StoryObj } from "@storybook/react";

import { StarRating } from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "shared/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Common: Story = {
  args: {},
};