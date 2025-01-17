import tailwindcss from "eslint-plugin-tailwindcss";
import readableTailwind from "eslint-plugin-readable-tailwind";

import config from "./react.js";

const [react, ...rest] = config;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    plugins: {
      tailwindcss,
      "readable-tailwind": readableTailwind,
    },
    rules: {
      tailwindcss: {
        callees: ["classNames"],
      }
    }
  },
  ...rest
];