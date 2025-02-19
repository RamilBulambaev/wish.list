import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import { NotificationButton } from "./NotificationButton";

const notifications = [
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

const meta: Meta<typeof NotificationButton> = {
  title: "features/NotificationButton",
  component: NotificationButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof NotificationButton>;

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
