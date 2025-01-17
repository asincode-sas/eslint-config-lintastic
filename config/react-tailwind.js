import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";

import base from "./react.js";

const [react, tests] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    plugins: {
      "readable-tailwind": eslintPluginReadableTailwind
    },
    rules: {
      // enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      // enable all recommended rules to error
      ...eslintPluginReadableTailwind.configs.error.rules,

      // or configure rules individually
      "readable-tailwind/multiline": ["warn", { printWidth: 100 }]
    }
  },
  ...tailwind.configs["flat/recommended"],
  tests
]
