import { withThemeByClassName } from "@storybook/addon-themes";
import { initialize, mswDecorator, mswLoader } from "msw-storybook-addon";

import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "./../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
import { SuspenseDecorator } from "./../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

import type { Preview } from "@storybook/react";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [],
    },
  },
  decorators: [
    mswDecorator,
    SuspenseDecorator,
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
  loaders: [mswLoader],
};

export default preview;
