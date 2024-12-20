import { Meta, StoryObj } from "@storybook/react";
import { CommentsList } from "./CommentsList";

const meta: Meta<typeof CommentsList> = {
  title: "entities/CommentsList",
  component: CommentsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentsList>;

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Common: Story = {
  args: {
    comments: [
      {
        id: "1",
        text: "comment 1",
        user: {
          id: "1",
          username: "1",
        },
      },
      {
        id: "2",
        text: "comment 2",
        user: {
          id: "2",
          username: "2",
        },
      },
    ],
  },
};

export const Empry: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
