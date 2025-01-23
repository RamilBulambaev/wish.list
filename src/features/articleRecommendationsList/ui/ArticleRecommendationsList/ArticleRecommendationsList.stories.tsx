import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const article = {
  id: "1",
  img: "",
  createAt: "",
  views: 123,
  user: { id: "1", username: "123" },
  block: [],
  type: [],
  title: "123",
  subtitle: "asdasd",
};

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
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
  parameters: {
    msw: {
      handlers: [
        http.get(__API__ + "/articles?_limit=3", () => {
          return HttpResponse.json([
            { ...article, id: 1 },
            { ...article, id: 2 },
            { ...article, id: 3 },
          ]);
        }),
      ],
    },
  },
};

export const NoRecommendaions: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(__API__ + "/articles?_limit=3", () => {
          return HttpResponse.json([]);
        }),
      ],
    },
  },
};
