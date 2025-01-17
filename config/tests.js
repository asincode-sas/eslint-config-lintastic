/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'Rules for test files',
    files: ["{test,tests}/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        asserts: true,
      },
    },
    rules: {
      "no-unused-expressions": "off",
    }
  }
];