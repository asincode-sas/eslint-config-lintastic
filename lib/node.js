import tseslint from "typescript-eslint";

import { rulesJS, rulesTS } from "#src/rules";
import plugins from "#src/plugins";
import ignores from "#src/ignores";
import tests from "#lib/tests";

const languageOptions = {
  sourceType: "module",
  globals: {
    node: true,
    process: true,
  },
};

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:base",
    languageOptions,
    plugins,
    ignores,
    rules: {
      ...rulesJS,
      ...rulesTS
    },
  },
  ...tseslint.configs.strict,
  ...tests
];