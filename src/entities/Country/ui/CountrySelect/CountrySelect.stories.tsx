import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { ECountry } from "../../model/types/country";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Common: Story = {
  args: {},
};

export const Value: Story = {
  args: {
    value: ECountry.Kazakhstan,
  },
};

export const Disabled: Story = {
  args: {
    readonly: true,
    value: ECountry.Armenia,
  },
};
