import tseslint from 'typescript-eslint';

import plugins from "#plugins.js";
import { rulesJS, rulesTS } from '#rules.js'
import tests from './tests.js';

const languageOptions = {
  sourceType: "module",
  globals: {
    node: true,
  },
};

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'Rules for js files',
    files: ["**/*.js"],
    languageOptions,
    plugins,
    rules: rulesJS,
  },
  {
    ...tseslint.configs.strict,
    name: 'Rules ts files',
    files: ["**/*.ts"],
    languageOptions,
    plugins,
    rules: {
      ...tseslint.configs.strict.rules,
      ...rulesJS,
      ...rulesTS
    },
  },
  ...tests
];