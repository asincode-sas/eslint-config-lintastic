
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import plugins from "#src/plugins";
import rules from "#src/rules"
import tests from "#lib/tests";
import html from "#lib/html";
import ignores from "#src/ignores";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name : "react:base",
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
    },
    rules: {
      ...rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "init-declarations": "off",
      "react/jsx-no-target-blank": "off",
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  ...html,
  ...tseslint.configs.recommended,
  ...tests,
  {
    ignores
  }
];
