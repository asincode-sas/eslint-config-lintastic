import { ESLint } from "eslint";

declare global {
  function lint(baseConfig: ESLint.Options): Promise<ESLint.LintResult[]>;
}

export { };