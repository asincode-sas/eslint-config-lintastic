import tailwindcss from "eslint-plugin-tailwindcss";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";

import base from "./react.js";

const [react, tests] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    ...tailwindcss.configs["flat/recommended"],
    ...{
      plugins: {
        "readable-tailwind": eslintPluginReadableTailwind
      }
    },
    ...{
      rules: {
        // enable all recommended rules to warn
        ...eslintPluginReadableTailwind.configs.warning.rules,
        // enable all recommended rules to error
        ...eslintPluginReadableTailwind.configs.error.rules,

        // or configure rules individually
        "readable-tailwind/multiline": ["warn", { printWidth: 100 }]
      }
    }
  },
  tests
]
