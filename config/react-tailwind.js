import tailwindcss from "eslint-plugin-tailwindcss";
import readableTailwind from "eslint-plugin-readable-tailwind";

import base from "./react.js";

const [react, tests] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    ...tailwind.configs["flat/recommended"]
  },
  tests
]
