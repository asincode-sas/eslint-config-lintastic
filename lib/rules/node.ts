import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";
import { rulesJS, rulesTS } from "./general";
import { ignores } from "./ignores";
import tests from "./tests";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

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
    plugins: {
      jsdoc,
    },
    rules: {
      ...(rulesJS as Record<string, unknown>),
      ...(rulesTS as Record<string, unknown>),
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-explicit-any": "error",
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
]);
