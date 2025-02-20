import { Meta, StoryObj } from "@storybook/react";

import { EArticleType } from "@/entities/Article";

import { ArticleTypeTabs } from "./ArticleTypeTabs";

const meta: Meta<typeof ArticleTypeTabs> = {
  title: "entities/ArticleTypeTabs",
  component: ArticleTypeTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Common: Story = {
  args: {},
};

export const ValueIt: Story = {
  args: {
    value: EArticleType.IT,
  },
};
