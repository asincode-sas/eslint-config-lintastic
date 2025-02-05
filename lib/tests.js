import js from "@eslint/js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:tests",
    files: ["{test,tests}/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        asserts: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-expressions": "off",
      "max-lines-per-function": [
        "error",
        { max: 80, skipBlankLines: true, skipComments: true, IIFEs: true }
      ],
    }
  }
];