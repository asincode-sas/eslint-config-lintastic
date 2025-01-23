import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";

import base from "./react.js";

const [react, tests] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    plugins: {
      ...react.plugins,
      "readable-tailwind": eslintPluginReadableTailwind
    },
    rules: {
      ...react.rules,
      // enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      // enable all recommended rules to error
      ...eslintPluginReadableTailwind.configs.error.rules,

      // or configure rules individually
      "readable-tailwind/multiline": "off",
      "eslint-plugin-tailwindcss/classnames-order": "off"
    }
  },
  ...tailwind.configs["flat/recommended"],
  tests
]
