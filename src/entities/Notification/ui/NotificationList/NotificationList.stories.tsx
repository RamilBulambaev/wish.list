import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import { NotificationList } from "./NotificationList";
import { Notification } from "../../model/types/notification";

const notifications: Notification[] = [
  {
    id: "1",
    title: "Уведомление 1",
    description: "Важное уведомление 1",
  },
  {
    id: "2",
    title: "Уведомление 2",
    description: "Важное уведомление 2",
  },
  {
    id: "3",
    title: "Уведомление 3",
    description: "Важное уведомление 3",
  },
];

const meta: Meta<typeof NotificationList> = {
  title: "entities/notification/NotificationList",
  component: NotificationList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Common: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(__API__ + "/notifications", () => {
          return HttpResponse.json(notifications);
        }),
      ],
    },
  },
};
