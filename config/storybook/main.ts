import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookWebpack } from "./webpack.config";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    // "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
      parser: { syntax: "typescript", tsx: true, dynamicImport: true },
    },
  }),
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => storybookWebpack({ config }),
};
export default config;
