import js from "@eslint/js";

export const rulesJS = {
  ...js.configs.all.rules,
  eqeqeq: "error",
  strict: ["error", "global"],
  "no-console": "off",
  "no-var": "error",
  "prefer-const": "error",
  'no-useless-catch': 'error',
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: false,
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_"
    }
  ],
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
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-param-names": "error",
  "jsdoc/check-tag-names": "error",
  "jsdoc/check-types": "warn",
  "jsdoc/require-param": "error",
  "jsdoc/require-param-description": "warn",
  "jsdoc/require-param-type": "error",
  "jsdoc/require-returns": "error",
  "jsdoc/require-returns-description": "warn",
  "jsdoc/require-returns-type": "error", 
  "no-restricted-imports": [
    "error",
    {
      paths: [
        {
          name: "date-fns",
          message: "El uso de 'date-fns' no está recomendado. Consulta https://youmightnotneed.com/date-fns para alternativas más ligeras o nativas."
        },
        {
          name: "dotenv",
          message: "Evita usar 'dotenv'. Usa variables de entorno nativas de Node.js mediante 'process.env' y configura tus entornos adecuadamente."
        },
        {
          name: "jest",
          message: "Evita usar 'jest'. Consulta https://pawelgrzybek.com/you-might-not-need-jest-the-node-js-native-test-runner-is-great/ para saber más"
        },
        {
          name: "jquery",
          message: "El uso de 'jQuery' ya no se recomienda. Usa vanilla JavaScript o frameworks modernos como React o Vue. Consulta https://youmightnotneedjquery.com/."
        },
        {
          name: "lodash",
          message: "El uso de 'lodash' no está recomendado. Consulta https://youmightnotneed.com/lodash para ejemplos de reemplazo."
        },
        {
          name: "moment",
          message: "El uso de 'moment.js' está deprecado. Consulta https://github.com/you-dont-need/You-Dont-Need-Momentjs para alternativas modernas."
        },
        {
          name: "morgan",
          message: "Evita usar 'morgan'. Usa herramientas más modernas o configura el registro de logs de forma personalizada con Node.js nativo o alternativas como Winston o Pino."
        },
        {
          name: "numeral",
          message: "Evita usar 'numeral.js', ya que no se actualiza desde 2017. Considera opciones modernas como la API Intl nativa de JavaScript o librerías activas como numbro. Consulta https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl para más detalles."
        },
        {
          name: "sort-by",
          message: "El uso de 'sort-by' no está recomendado. Considera implementar funciones nativas de ordenación o usar alternativas modernas."
        }
      ],
      patterns: [{
        group: ["../*"],
        message: "Evita usar rutas relativas como '../'. Usa los alias definidos en el proyecto para mejorar la claridad y consistencia."
      }]
    }
  ]
};

export const rulesTS = {
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-unused-vars': 0,
};

export default {
  ...rulesJS,
  ...rulesTS
}
