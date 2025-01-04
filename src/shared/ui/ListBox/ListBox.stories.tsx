import { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";

const options = [
  { value: "Привет", content: "Привет" },
  { value: "Пока", content: "Пока" },
];

const meta: Meta<typeof ListBox> = {
  title: "shared/ListBox",
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Common: Story = {
  args: {
    items: options,
    value: "Привет",
    label: "Привет или пока?",
  },
};

export const Disabled: Story = {
  args: {
    items: options,
    value: "Пока",
    label: "Привет или пока?",
    readonly: true,
  },
};
