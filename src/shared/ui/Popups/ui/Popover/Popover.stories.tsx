import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

// eslint-disable-next-line plugin-path-checker-fsd-r/layer-imports
import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import { Popover } from "./Popover";
 


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

const meta: Meta<typeof Popover> = {
  title: "shared/Popups/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Common: Story = {
  args: {
    direction: "bottom left",
    trigger: (
      <Button theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    ),
    children: <NotificationList />,
  },
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
