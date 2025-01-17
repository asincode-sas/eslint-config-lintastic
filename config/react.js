
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import forceThemeColors from "eslint-plugin-force-theme-colors";

import plugins from "#plugins.js";
import rules from "#rules.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: ["dist", "build", "coverage"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
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
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "force-theme-colors": forceThemeColors,
    },
    rules: {
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
