import { Meta, StoryObj } from "@storybook/react";

import { CurrencySelect } from "./CurrencySelect";
import { ECurrency } from "../../model/types/currency";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Common: Story = {
  args: {},
};

export const Value: Story = {
  args: {
    value: ECurrency.EUR,
  },
};

export const Disabled: Story = {
  args: {
    value: ECurrency.USD,
    readonly: true,
  },
};
