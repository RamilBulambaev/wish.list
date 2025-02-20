import { Meta, StoryObj } from "@storybook/react";

import { EArticleView } from "@/entities/Article";

import { ArticleViewSelector } from "./ArticleViewSelector";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "entities/ArticleViewSelector",
  component: ArticleViewSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const BIG: Story = {
  args: {
    view: EArticleView.BIG,
  },
};

export const SMALL: Story = {
  args: {
    view: EArticleView.SMALL,
  },
};
