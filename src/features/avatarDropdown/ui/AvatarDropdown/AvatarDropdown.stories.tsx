import { Meta, StoryObj } from "@storybook/react";

import { UserRole } from "@/entities/User";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { AvatarDropdown } from "./AvatarDropdown";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const User: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "testuser",
          avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
          roles: [UserRole.USER],
        },
      },
    }),
  ],
};

export const Admin: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "testuser",
          avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
          roles: [UserRole.ADMIN],
        },
      },
    }),
  ],
};

export const Manager: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "testuser",
          avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
          roles: [UserRole.MANAGER],
        },
      },
    }),
  ],
};

export const NoAvatar: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "noavatar",
          avatar: "", // или null
          roles: [UserRole.USER],
        },
      },
    }),
  ],
};
