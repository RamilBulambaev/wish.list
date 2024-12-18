import { Meta, StoryObj } from "@storybook/react";
import { Text, TextSize, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Common: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Заголовок",
  },
};

export const onlyText: Story = {
  args: {
    text: "Текст",
  },
};

export const CommonError: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitleError: Story = {
  args: {
    title: "Заголовок",
    theme: TextTheme.ERROR,
  },
};

export const onlyTextError: Story = {
  args: {
    text: "Текст",
    theme: TextTheme.ERROR,
  },
};

export const SizeM: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
    size: TextSize.L,
  },
};

export const ErrorSizeM: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
    theme: TextTheme.ERROR,
    size: TextSize.M,
  },
};

export const ErrorSizeL: Story = {
  args: {
    text: "Текст",
    title: "Заголовок",
    theme: TextTheme.ERROR,
    size: TextSize.L,
  },
};
