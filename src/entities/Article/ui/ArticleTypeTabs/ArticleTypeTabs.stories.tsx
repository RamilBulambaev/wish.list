import { Meta, StoryObj } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";
import { EArticleType } from "../../model/consts/articleConsts";

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
