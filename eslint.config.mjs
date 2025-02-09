import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18next from "eslint-plugin-i18next";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pathCheckerPlugin from "eslint-plugin-plugin-path-checker-fsd-r";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        __IS_DEV__: "readonly",
        __API__: "readonly",
        __PROJECT__: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginI18next.configs["flat/recommended"],

  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "plugin-path-checker-fsd-r": pathCheckerPlugin,
    },
    rules: {
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      indent: [2, 2, { SwitchCase: 1 }],
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/jsx-no-comment-textnodes": "warn",
      "max-len": ["error", { ignoreComments: true, code: 130 }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "plugin-path-checker-fsd-r/path-checker": ["error", { alias: "@" }],
    },
  },
  {
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "max-len": "off", // Отключаем max-len для тестов и stories
      "no-unused-vars": "warn",
    },
  },
];
