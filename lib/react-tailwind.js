import tailwindcss from "eslint-plugin-tailwindcss";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";

import base from "#lib/react";

const [react, ...rest] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    name: "react:tailwindcss",
    plugins: {
      ...react.plugins,
      "readable-tailwind": eslintPluginReadableTailwind,
      tailwindcss
    },
    rules: {
      ...react.rules,
      ...eslintPluginReadableTailwind.configs.warning.rules,
      ...eslintPluginReadableTailwind.configs.error.rules,
      "readable-tailwind/multiline": "off",
      "max-lines-per-function": [
        "error",
        { max: 200, skipBlankLines: true, skipComments: true, IIFEs: true }
      ],
    },
    settings: {
      ...react.settings,
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl"],
        config: "tailwind.config.js",
        removeDuplicates: true,
        cssFiles: [
          "**/*.css",
          "!**/node_modules",
          "!**/.*",
          "!**/dist",
          "!**/build",
        ],
      }
    }
  },
  ...rest
]
