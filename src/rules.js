import js from "@eslint/js";

export const rulesJS = {
  ...js.configs.all.rules,
  // Reglas generales
  eqeqeq: "error",
  strict: ["error", "global"],
  curly: "off",
  "complexity": ["error", { max: 6, variant: "modified" }],
  "id-length": "off",
  "init-declarations": "off",
  "no-console": "off",
  "no-var": "error",
  "prefer-const": "error",
  "arrow-body-style": "off",
  "no-magic-numbers": "off",
  "no-negated-condition": "off",
  "no-inline-comments": "off",
  "no-ternary": "off",
  "no-undefined": "error",
  "max-lines-per-function": [
    "error",
    { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true }
  ],
  "one-var": "off",
  "require-unicode-regexp": "off",
  "sort-keys": "off",

  // Variables y argumentos
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: false,
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
    },
  ],
  "no-useless-catch": "error",

  // stylistic
  '@stylistic/js/indent': ['error', 2],

  // JSDoc
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-param-names": "error",
  "jsdoc/check-tag-names": "error",
  "jsdoc/check-types": "warn",
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
  "jsdoc/require-param": "error",
  "jsdoc/require-param-description": "error",
  "jsdoc/require-param-type": "error",
  "jsdoc/require-returns": "error",
  "jsdoc/require-returns-description": "error",
  "jsdoc/require-returns-type": "error",
  "no-restricted-syntax": [
    "error",
    {
      "selector": "CallExpression[callee.name='axios'][arguments.0.type='Literal'][arguments.0.value^='http']",
      "message": "No se permite usar axios con una URL directamente. Usa una instancia creada con axios.create()."
    }
  ],
  "no-restricted-imports": [
    "error",
    {
      paths: [
        {
          name: "@types/axios",
          message: "No se permite importar '@types/axios'. Usa la definición de tipos incluida en axios."
        },
        {
          name: "date-fns",
          message: "El uso de 'date-fns' no está recomendado. Consulta https://youmightnotneed.com/date-fns para alternativas más ligeras o nativas."
        },
        {
          name: "dotenv",
          message: "Evita usar 'dotenv'. Usa variables de entorno nativas de Node.js mediante 'process.env' y configura tus entornos adecuadamente."
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
        },
        {
          name: "http-errors",
          message: "Evita usar 'http-errors'. Implementa tus propios errores HTTP personalizados o utiliza clases de error nativas en Node.js para mayor control y flexibilidad."
        },
        {
          name: "sinon",
          message: "El uso de 'sinon.js' no está recomendado. Usa APIs de prueba nativas de Node.js o herramientas más modernas como Vitest o Mock Service Worker (MSW)."
        }
      ],
      patterns: [
        {
          group: ["*jest*"],
          message: "Evita usar 'jest' y derivados. Consulta https://pawelgrzybek.com/you-might-not-need-jest-the-node-js-native-test-runner-is-great/ para saber más"
        },
        {
          group: ["datatables*", "react-data-table-component"],
          message: "Evita usar 'Datatables' y sus variaciones ya que continenen jQuery y no está aprobado su uso."
        },
        {
          group: ["jquery*", ".*jquery.*", "$", "jQuery"],
          message: "Evita usar 'jQuery' y sus variaciones ('jquery-ui', 'jquery-mobile', etc.). Usa JavaScript nativo o React, Angular. Consulta https://youmightnotneedjquery.com/."
        },
        {
          group: ["../*"],
          message: "Evita usar rutas relativas como '../'. Usa los alias definidos en el proyecto para mejorar la claridad y consistencia."
        }
      ]
    }
  ]
};

export const rulesTS = {
  "@typescript-eslint/no-empty-function": 0,
  "@typescript-eslint/no-explicit-any": 0,
  "@typescript-eslint/no-unused-vars": [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }
  ]
};

export default {
  ...rulesJS,
  ...rulesTS
}
