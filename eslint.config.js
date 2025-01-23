import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "lintastic:base",
    languageOptions: {
      globals: {
        ...globals.node,
        lint: "readonly"
      },
    },
    ...pluginJs.configs.recommended,
    ignores: ["test/samples/**"],
  },
];