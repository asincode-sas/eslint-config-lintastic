export default {
  "no-console": "off", //Permitir el uso de console.log - util para desarrollo
  "no-var": "error", //Fomentar el uso de let y const
  "prefer-const": "error", //Recomendar usar const donde sea posible
  "eqeqeq": "error", //Usar siempre === en lugar de ==
  "strict": ["error", "global"], //Aplicar modo estricto en el entorno global
  "no-unused-vars": [
    "error",
    {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false,
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_"
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
  "no-restricted-imports": [
    "error",
    {
      "paths": [
        {
          "name": "date-fns",
          "message": "El uso de 'date-fns' no está recomendado. Consulta https://youmightnotneed.com/date-fns para alternativas más ligeras o nativas."
        },
        {
          "name": "dotenv",
          "message": "Evita usar 'dotenv'. Usa variables de entorno nativas de Node.js mediante 'process.env' y configura tus entornos adecuadamente."
        },
        {
          "name": "jest",
          "message": "Evita usar 'jest'. Consulta https://pawelgrzybek.com/you-might-not-need-jest-the-node-js-native-test-runner-is-great/ para saber más"
        },
        {
          "name": "jquery",
          "message": "El uso de 'jQuery' ya no se recomienda. Usa vanilla JavaScript o frameworks modernos como React o Vue. Consulta https://youmightnotneedjquery.com/."
        },
        {
          "name": "lodash",
          "message": "El uso de 'lodash' no está recomendado. Consulta https://youmightnotneed.com/lodash para ejemplos de reemplazo."
        },
        {
          "name": "moment",
          "message": "El uso de 'moment.js' está deprecado. Consulta https://github.com/you-dont-need/You-Dont-Need-Momentjs para alternativas modernas."
        },
        {
          "name": "morgan",
          "message": "Evita usar 'morgan'. Usa herramientas más modernas o configura el registro de logs de forma personalizada con Node.js nativo o alternativas como Winston o Pino."
        },
        {
          "name": "numeral",
          "message": "Evita usar 'numeral.js', ya que no se actualiza desde 2017. Considera opciones modernas como la API Intl nativa de JavaScript o librerías activas como numbro. Consulta https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl para más detalles."
        },
        {
          "name": "sort-by",
          "message": "El uso de 'sort-by' no está recomendado. Considera implementar funciones nativas de ordenación o usar alternativas modernas."
        }
      ],
      "patterns": [{
        "group": ["../*"],
        "message": "Evita usar rutas relativas como '../'. Usa los alias definidos en el proyecto para mejorar la claridad y consistencia."
      }]
    }
  ]
};
