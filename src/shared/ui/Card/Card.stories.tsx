import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Common: Story = {
  args: {
    children: <Text title={"test"} text={"text text"} />,
  },
};
