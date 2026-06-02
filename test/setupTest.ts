import { ESLint } from "eslint";

/**
 * Linta el texto proporcionado utilizando una configuración de ESLint.
 * @param baseConfig - Configuración de ESLint a utilizar.
 * @param text - El texto que se va a analizar.
 * @returns Una promesa que se resuelve con los resultados del linting.
 * Los resultados son un array de objetos de tipo `LintResult`.
 */
declare global {
  const lint: (
    baseConfig: ESLint.Options,
    text: string,
  ) => Promise<ESLint.LintResult[]>;
}
