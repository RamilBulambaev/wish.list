import { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Common: Story = {
  args: {},
  decorators: StoreDecorator({
    ArticleDetails: {
      data: {
        id: "1",
        title: "subtitle",
        user: {
          id: "1",
        },
      },
    },
    user: {
      _inited: true,
      authData: {
        id: "1",
        username: "user",
      },
    },
  }),
};
