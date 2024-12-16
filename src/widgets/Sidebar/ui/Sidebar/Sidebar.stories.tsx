import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Auth: Story = {
  args: {},
  decorators: StoreDecorator({
    user: {
      authData: {},
    },
  }),
};

export const NoAuth: Story = {
  args: {},
};
