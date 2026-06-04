import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";
import { rulesJS } from "#src/rules";
import plugins from "#src/plugins";
import ignores from "#src/ignores";
import tests from "#lib/tests";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const languageOptions = {
  sourceType: "module",
  globals: globals.node,
};

export default defineConfig([
  jsdoc.configs["flat/recommended-error"],
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    name: "node:base",
    languageOptions,
    plugins,
    rules: {
      ...(rulesJS as Record<string, unknown>),
      "@typescript-eslint/no-empty-function": 'error',
      "@typescript-eslint/no-explicit-any": 'error',
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // Node exclusives
      "max-params": ["error", 4],
      "new-cap": ["error", { capIsNew: false }],
    },
  },
  ...tseslint.configs.strict,
  ...tests,
  {
    ignores,
  },
])