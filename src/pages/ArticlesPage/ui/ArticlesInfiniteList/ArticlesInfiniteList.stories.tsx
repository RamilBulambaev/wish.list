import { Meta, StoryObj } from "@storybook/react";
import { ArticlesInfiniteList } from "./ArticlesInfiniteList";

const meta: Meta<typeof ArticlesInfiniteList> = {
  title: "pages/ArticlesInfiniteList",
  component: ArticlesInfiniteList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesInfiniteList>;

export default meta;
type Story = StoryObj<typeof ArticlesInfiniteList>;

export const Common: Story = {
  args: {},
};