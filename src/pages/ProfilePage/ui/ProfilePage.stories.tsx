import { Meta, StoryObj } from "@storybook/react/*";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { ProfilePage } from "..";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: "Ramil",
          first: "Ramil",
          lastname: "Bulambaev",
          age: 28,
          city: "Omsk",
          country: ECountry.Russia,
          currency: ECurrency.RUB,
        },
      },
    }),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  args: {},
};
