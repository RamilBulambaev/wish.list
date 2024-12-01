import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack, { RuleSetRule } from "webpack";
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
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", "tsx");
  // config!.resolve!.alias = {
  //   ...config!.resolve!.alias,
  //   "*": path.resolve(__dirname, "..", "..", "src"),
  // };

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

  return config;
};
