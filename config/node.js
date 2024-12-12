import js from "@eslint/js";

import plugins from "#plugins.js";
import rules from "#rules.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'Rules for js and ts files',
    files:["**/*.{js,ts}"], // Aplica a todos los archivos .js
    ...js.configs.all,
    languageOptions: {
      sourceType: "module", // Usa scripts si no estas usando modulos
      globals: {
        node: true
      },
    },
    plugins,
    rules: {
      ...rules,
      "no-console": "off", // Permitir el uso de console.log - util para desarrollo
      "no-var": "error", // Fomentar el uso de let y const
      "prefer-const": "error", // Recomendar usar const donde sea posible
      "eqeqeq": "error", // Usar siempre === en lugar de ==
      "strict": ["error", "global"], // Aplicar modo estricto en el entorno global
      "jsdoc/require-example": [
        "error",
        {
          contexts: [
            "FunctionDeclaration",
            "MethodDefinition",
            "ClassDeclaration",
            "ArrowFunctionExpression",
            "FunctionExpression",
          ],
        },
      ],
      //Verificacion adicional para los JSDoc
      "jsdoc/check-alignment": "warn", //Alineacion de los comentarios
      "jsdoc/check-param-names": "error", //Nombre de paramentros correcto
      "jsdoc/check-tag-names": "error", //Etiquetas validas
      "jsdoc/check-types": "warn", //Tipos de parametros y retornos validos
      "jsdoc/require-param": "error", //Documentacion de parametros requerida
      "jsdoc/require-param-description": "warn", //Descripcion para cada parametro
      "jsdoc/require-param-type": "error", //Tipo requerido para cada parametro
      "jsdoc/require-returns": "error", //Documentacion de valor de retorno requerida
      "jsdoc/require-returns-description": "warn", //Descripcion para el retorno
      "jsdoc/require-returns-type": "error", //Tipo requerido para el retorno
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-example": "off",
    },
  },
  //Configuracion de pruebas
  {
    name: 'Rules for test files',
    files: ["**/*.test.js", "*/tests/**/*.js", "*/_tests_/**/*.js"],
    languageOptions: {
      globals: {
        asserts: true
      },
    },
    rules: {
      "no-unused-expressions": "off" // A menudo util en pruebas
    },
  },
];