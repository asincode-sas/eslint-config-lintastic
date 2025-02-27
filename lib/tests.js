import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:tests",
    files: ["{test,tests}/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        asserts: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-expressions": "off",
      "no-undefined": "off",
      "max-lines-per-function": [
        "error",
        { max: 150, skipBlankLines: true, skipComments: true, IIFEs: true }
      ],
    }
  },
  ...tseslint.configs.recommended,
];