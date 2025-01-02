import js from "@eslint/js";
import tseslint from "typescript-eslint";

import plugins from "#plugins.js";
import rules from "#rules.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'Rules for js and ts files',
    files:["**/*.{js,ts}"], // Aplica a todos los archivos .js
    ...js.configs.all,
    languageOptions: {
      sourceType: "module", // Usa módulos
      globals: {
        node: true, // Define 'node' como global
      },
    },
    plugins,
    rules,
  },
  {
    name: 'Rules for ts files',
    files: ["**/*.{ts,tsx}"], // Aplica a archivos .ts y .tsx
    plugins: {
      ...plugins,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      ...rules,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 0,
    }
  },
  {
    name: 'Rules for test files',
    files: [
      "**/*.{test.js,test.ts,test.jsx,test.tsx}",
      "*/tests/**/*.{js,ts,jsx,tsx}",
      "*/_tests_/**/*.{js,ts,jsx,tsx}"
    ],
    languageOptions: {
      globals: {
        asserts: true,
      },
    },
    rules: {
      "no-unused-expressions": "off", // A menudo útil en pruebas
    },
  },
];