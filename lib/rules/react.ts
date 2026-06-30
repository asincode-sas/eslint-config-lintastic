import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import reactDom from "eslint-plugin-react-dom";
import reactX from "eslint-plugin-react-x";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import plugins from "#plugins/addons";
import { rulesJS, rulesTS } from "./general";
import tests from "./tests";
import { ignores } from "./ignores";
import type { Linter } from "eslint";

export default defineConfig([
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
      ...rulesJS,
      ...rulesTS,
      ...reactX.configs.strict.rules,
      ...reactDom.configs.strict.rules,
      ...reactHooks.configs.recommended.rules,
      "init-declarations": "off",
      "react-x/exhaustive-deps": "off",
      "react-x/no-unstable-context-value": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...tseslint.configs.recommended,
  ...tests,
  {
    ignores,
  },
] as Linter.Config[]);
