import { Button } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Common: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [{ content: "first" }, { content: "second" }, { content: "third" }],
  },
};
