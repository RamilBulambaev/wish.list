import { Meta, StoryObj } from "@storybook/react/*";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "feature/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: "testUser",
        password: "testPassword",
        isLoading: false,
        error: null,
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: "testUser",
        password: "testPassword",
        isLoading: false,
        error: "ERROR",
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: "testUser",
        password: "testPassword",
        isLoading: true,
        error: null,
      },
    }),
  ],
};
