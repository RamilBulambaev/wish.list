import { Meta, StoryObj } from "@storybook/react";

import { NotificationItem } from "./NotificationItem";

const meta: Meta<typeof NotificationItem> = {
  title: "entities/notification/NotificationItem",
  component: NotificationItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Common: Story = {
  args: {
    item: {
      id: "1",
      title: "Уведомление",
      description: "Важное уведомление",
    },
  },
};
