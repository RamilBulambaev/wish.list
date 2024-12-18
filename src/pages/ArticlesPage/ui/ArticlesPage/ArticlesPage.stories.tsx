import { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Common: Story = {
  args: {},
};