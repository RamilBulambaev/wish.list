import pluginConarti from "@conarti/eslint-plugin-feature-sliced";
import pluginJs from "@eslint/js";
import pluginI18next from "eslint-plugin-i18next";
import pluginImport from "eslint-plugin-import";
import pathCheckerPlugin from "eslint-plugin-plugin-path-checker-fsd-r";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

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
      "unused-imports": unusedImports,
      "@conarti/feature-sliced": pluginConarti,
      import: pluginImport,
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
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "plugin-path-checker-fsd-r/path-checker": ["error", { alias: "@" }],
      "plugin-path-checker-fsd-r/layer-imports": [
        "error",
        {
          alias: "@",
          ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
        },
      ],
      "plugin-path-checker-fsd-r/public-api-imports": [
        "error",
        {
          alias: "@",
          testFilesPatterns: [
            "**/*.test.*",
            "**/*.story.*",
            "**/StoreDecorator.tsx",
          ],
        },
      ],
      // "@conarti/feature-sliced/layers-slices": "error",
      "@conarti/feature-sliced/absolute-relative": "off",
      "@conarti/feature-sliced/public-api": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Встроенные модули (fs, path и т.д.)
            "external", // Сторонние библиотеки из node_modules
            "internal", // Внутренние импорты из проекта
            ["parent", "sibling", "index"], // Вложенные импорты
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc", // Импорты сортируются в алфавитном порядке
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "max-len": "off", // Отключаем max-len для тестов и stories
      "no-unused-vars": "warn",
      "@conarti/feature-sliced/layers-slices": "off",
      "@conarti/feature-sliced/absolute-relative": "off",
      "@conarti/feature-sliced/public-api": "off",
    },
  },
];
