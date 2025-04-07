import tailwindcss from "eslint-plugin-tailwindcss";

import base from "#lib/react";

const [jsdoc, react, ...rest] = base;

/** @type {import("eslint").Linter.Config[]} */
export default [
  jsdoc,
  {
    ...react,
    name: "react:tailwindcss",
    plugins: {
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
