import { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Common: Story = {
  args: {},
};
