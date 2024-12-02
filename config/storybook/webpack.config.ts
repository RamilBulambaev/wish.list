import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoader";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

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

  config.plugins?.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    })
  );

  config.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.optimization = {
    ...config.optimization,
    minimize: true,
  };

  return config;
};
