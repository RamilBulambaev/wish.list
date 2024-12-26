import { Meta, StoryObj } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta: Meta<typeof ArticlesPageFilters> = {
  title: "pages/ArticlesPageFilters",
  component: ArticlesPageFilters,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Common: Story = {
  args: {},
};