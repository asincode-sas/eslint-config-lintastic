import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import reactDom from "eslint-plugin-react-dom";
import reactX from "eslint-plugin-react-x";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import plugins from "#src/plugins";
import rules from "#src/rules";
import tests from "#lib/tests";
import html from "#lib/html";
import ignores from "#src/ignores";
import type { Linter } from "eslint";

export default [
  jsdoc.configs["flat/recommended-error"],
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    name: "react:base",
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      ...plugins,
      "react-x": reactX,
      "react-dom": reactDom,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...rules,
      ...reactX.configs.strict.rules,
      ...reactDom.configs.strict.rules,
      ...reactHooks.configs.recommended.rules,
      "init-declarations": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...html,
  ...tseslint.configs.recommended,
  ...tests,
  {
    ignores,
  },
] as Linter.Config[];
