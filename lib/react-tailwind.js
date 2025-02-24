import tailwindcss from "eslint-plugin-tailwindcss";

import plugins from "#src/plugins";
import ignores from "#src/ignores";
import base from "#lib/react";

const [react, ...rest] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...react,
    name: "react:tailwindcss",
    plugins: {
      ...plugins,
      ...react.plugins,
      tailwindcss
    },
    rules: {
      ...react.rules,
      "max-lines-per-function": [
        "error",
        { max: 200, skipBlankLines: true, skipComments: true, IIFEs: true }
      ]
    },
    ignores,
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
