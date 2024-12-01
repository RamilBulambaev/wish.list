import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    withThemeByClassName({
      themes: {
        light: "app light",
        dark: "app dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
