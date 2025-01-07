import { Meta, StoryObj } from "@storybook/react";

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Common: Story = {
  args: {},
};