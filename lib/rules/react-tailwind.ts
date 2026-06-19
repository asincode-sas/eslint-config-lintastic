import tailwindcss from "eslint-plugin-tailwindcss";
import base from "#rules/react.js";
import { defineConfig } from "eslint/config";

const [jsdoc, react, ...rest] = base;

export default defineConfig([
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
]);
