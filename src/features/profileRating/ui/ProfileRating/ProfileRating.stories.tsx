import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import { Rating } from "@/entities/Rating";

import ProfileRating from "./ProfileRating";

const mockRatingData: Rating[] = [
  {
    rate: 4,
    feedback: "Отличная статья",
  },
];

const meta: Meta<typeof ProfileRating> = {
  title: "features/ProfileRating",
  component: ProfileRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Common: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(__API__ + "/profile-ratings", () => {
          return HttpResponse.json(mockRatingData);
        }),
      ],
    },
  },
};
