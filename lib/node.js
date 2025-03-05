import tseslint from "typescript-eslint";

import { rulesJS, rulesTS } from "#src/rules";
import plugins from "#src/plugins";
import ignores from "#src/ignores";
import tests from "#lib/tests";
import globals from "globals";

const languageOptions = {
  sourceType: "module",
  globals: globals.node,
};

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "node:base",
    languageOptions,
    plugins,
    rules: {
      ...rulesJS,
      ...rulesTS,
      // Node exlusives
      "max-params": ["error", 4],
      "new-cap": ["error", { "capIsNew": false }],
    },
  },
  ...tseslint.configs.strict,
  ...tests,
  {
    ignores
  }
];