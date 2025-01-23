import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoader";

export const storybookWebpack = ({
  config,
}: {
  config: webpack.Configuration;
}) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "../../src"),
    locales: "",
    buildLocales: "",
  };
  config.resolve!.alias = {
    ...config!.resolve!.alias,
    "@": path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", "tsx");

  config.module?.rules?.push(buildCssLoaders(true));

  config.module!.rules = config
    .module!.rules!.filter(
      (rule): rule is RuleSetRule => !!rule && typeof rule === "object"
    )
    .map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

  config.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify("https://testapi.ru"),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  return config;
};
