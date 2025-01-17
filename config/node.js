

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
    name: 'Rules ts files',
    files: ["**/*.ts"],
    plugins,
    rules: rulesTS,
  },
  ...tests
];