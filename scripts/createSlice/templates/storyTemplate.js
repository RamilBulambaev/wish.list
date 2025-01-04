/* eslint-disable no-undef */
module.exports = (
  layer,
  componentName
) => `import { Meta, StoryObj } from "@storybook/react";

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Common: Story = {
  args: {},
};`;
