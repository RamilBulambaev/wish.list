import { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Common: Story = {
  args: {},
};
