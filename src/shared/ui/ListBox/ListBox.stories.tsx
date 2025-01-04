import { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";
import { ECurrency } from "@/entities/Currency";

const options = [
  { value: ECurrency.RUB, content: ECurrency.RUB },
  { value: ECurrency.USD, content: ECurrency.USD },
  { value: ECurrency.EUR, content: ECurrency.EUR },
];

const meta: Meta<typeof ListBox> = {
  title: "shared/ListBox",
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Common: Story = {
  args: {
    items: options,
    value: ECurrency.RUB,
    label: "Укажите валюту",
  },
};

export const Disabled: Story = {
  args: {
    items: options,
    value: ECurrency.RUB,
    label: "Укажите валюту",
    readonly: true,
  },
};
