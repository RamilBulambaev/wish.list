import { Meta, StoryObj } from "@storybook/react";

import { RatingCard } from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  title: "entities/RatingCard",
  component: RatingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Common: Story = {
  args: {},
};