import { Meta, StoryObj } from "@storybook/react";

import ArticleEditPage from "./ArticleEditPage";

const meta: Meta<typeof ArticleEditPage> = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Common: Story = {
  args: {},
};
