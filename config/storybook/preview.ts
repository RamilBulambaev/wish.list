import { StoreDecorator } from "./../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
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
    withThemeByClassName({
      themes: {
        light: "app_light_theme",
        dark: "app_dark_theme",
        blue: "app_blue_theme",
      },
      defaultTheme: "light",
    }),
    StoreDecorator({
      counter: { value: 0 },
      user: { authData: null },
      login: { username: "", password: "", isLoading: false, error: null },
    }),
    RouterDecorator,
  ],
};

export default preview;
