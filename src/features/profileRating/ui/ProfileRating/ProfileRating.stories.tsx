import { Meta, StoryObj } from "@storybook/react";
import ProfileRating from "./ProfileRating";

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
};
