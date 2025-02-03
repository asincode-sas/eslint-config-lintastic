import tseslint from "typescript-eslint";

import plugins from "#src/plugins";
import { rulesJS, rulesTS } from "#src/rules"
// import tests from "#lib/tests";

const languageOptions = {
  sourceType: "module",
  globals: {
    node: true,
  },
};

const ignores = [
  "*.config.*",
  "{test,tests}/**/*.{js,ts}"
];

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:base",
    // files: ["./src/**/*.js"],
    ignores,
    languageOptions,
    plugins,
    rules: rulesJS,
  },
  {
    ...tseslint.configs.strict,
    name: "node:typescript",
    files: ["./**/*.ts"],
    ignores,
    languageOptions,
    plugins,
    rules: {
      ...tseslint.configs.strict.rules,
      ...rulesJS,
      ...rulesTS
    },
  },
  // ...tests
];