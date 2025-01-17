
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import forceThemeColors from "eslint-plugin-force-theme-colors";

import plugins from "#plugins.js";
import rules from "#rules.js";
import tests from './tests.js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'Rules for react and node files',
    files: ["**.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      ...plugins,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "force-theme-colors": forceThemeColors,
    },
    rules: {
      ...js.configs.all.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...rules,
      "react/jsx-no-target-blank": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  tests
];
