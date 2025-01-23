import tailwind from "eslint-plugin-tailwindcss";

import base from "#lib/react";

const [react, tests] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    plugins: {
      ...react.plugins,
    },
    rules: {
      ...react.rules,

      // or configure rules individually
      "readable-tailwind/multiline": "off",
      "eslint-plugin-tailwindcss/classnames-order": "off"
    }
  },
  ...tailwind.configs["flat/recommended"],
  tests
]
