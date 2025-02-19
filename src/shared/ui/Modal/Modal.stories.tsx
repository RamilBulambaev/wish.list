import { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Common: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque magni impedit nihil, dolore fugit magnam, ex culpa numquam sit minima dicta soluta earum saepe modi architecto perspiciatis minus error temporibus",
  },
};
