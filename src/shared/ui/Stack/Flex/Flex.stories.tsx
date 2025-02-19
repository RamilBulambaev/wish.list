/* eslint-disable i18next/no-literal-string */
import { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Common: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
