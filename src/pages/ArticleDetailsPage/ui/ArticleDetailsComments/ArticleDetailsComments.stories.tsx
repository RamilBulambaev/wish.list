import { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

const meta: Meta<typeof ArticleDetailsComments> = {
  title: "pages/ArticleDetailsComments",
  component: ArticleDetailsComments,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Common: Story = {
  args: {},
};