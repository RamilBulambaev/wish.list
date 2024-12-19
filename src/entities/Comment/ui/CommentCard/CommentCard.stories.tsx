import { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "entities/CommentCard",
  component: CommentCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Common: Story = {
  args: {
    comment: {
      user: {
        username: "Makvoi",
        id: "1",
      },
      id: "1",
      text: "Comment",
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comment: {
      user: {
        username: "Makvoi",
        id: "1",
      },
      id: "1",
      text: "Comment",
    },
  },
};
