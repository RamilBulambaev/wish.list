import { Meta, StoryObj } from "@storybook/react/*";
import { ProfileCard } from "./ProfileCard";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: "Ramil",
      first: "Ramil",
      lastname: "Bulambaev",
      age: 28,
      city: "Omsk",
      country: ECountry.Russia,
      currency: ECurrency.RUB,
    },
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: "error",
  },
};
