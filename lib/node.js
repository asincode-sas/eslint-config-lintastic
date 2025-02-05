import tseslint from "typescript-eslint";

import { rulesJS, rulesTS } from "#src/rules"
import plugins from "#src/plugins";
import tests from "#lib/tests";

const languageOptions = {
  sourceType: "module",
  globals: {
    node: true,
    process: true,
  },
};

const ignores = [
  "*.config.*",
  "build/**",
  "coverage/**",
  "dist/**"
];

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:base",
    ignores,
    languageOptions,
    plugins,
    rules: {
      ...rulesJS,
      ...rulesTS
    },
  },
  ...tseslint.configs.strict,
  ...tests
];