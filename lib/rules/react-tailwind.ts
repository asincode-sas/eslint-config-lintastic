import tailwindcss from "eslint-plugin-tailwindcss";
import base from "#lib/rules/react";
import type { Linter } from "eslint";

const [jsdoc, react, ...rest] = base;

export default [
  jsdoc,
  {
    ...react,
    name: "react:tailwindcss",
    plugins: {
      ...react.plugins,
      tailwindcss,
    },
    rules: {
      ...react.rules,
      "react-hooks/exhaustive-deps": "off",
      "max-lines-per-function": [
        "error",
        { max: 200, skipBlankLines: true, skipComments: true, IIFEs: true },
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
      },
    },
  },
  ...rest,
] as Linter.Config[];
