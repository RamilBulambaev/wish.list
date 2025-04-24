import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import { Rating } from "@/entities/Rating";

import ArticleRating from "./ArticleRating";

const mockRatingData: Rating[] = [
  {
    rate: 4,
    feedback: "Отличная статья",
  },
];

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Common: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(__API__ + "/article-ratings", () => {
          return HttpResponse.json(mockRatingData);
        }),
      ],
    },
  },
};
