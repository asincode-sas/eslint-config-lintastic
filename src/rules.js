export default {
  "no-console": "off", //Permitir el uso de console.log - util para desarrollo
  "no-var": "error", //Fomentar el uso de let y const
  "prefer-const": "error", //Recomendar usar const donde sea posible
  "eqeqeq": "error", //Usar siempre === en lugar de ==
  "strict": ["error", "global"], //Aplicar modo estricto en el entorno global
  "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
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
          "name": "moment",
          "message": "Moment.js está deprecado. Usa alternativas como date-fns o dayjs."
        },
        {
          "name": "jquery",
          "message": "jQuery ya no se recomienda. Usa vanilla JavaScript o frameworks modernos como React o Vue."
        },
        {
          "name": "jest",
          "message": "En este proyecto usamos Node.js test runner o Vitest. Evita usar Jest."
        },
        {
          "name": "dotenv",
          "message": "Evita usar dotenv. Usa variables de entorno nativas de Node.js mediante process.env y configura tus entornos adecuadamente."
        },
        {
          "name": "nodemon",
          "message": "Evita usar nodemon. Usa el flag `--watch` con Node.js nativo o herramientas modernas como PM2."
        },
        {
          "name": "morgan",
          "message": "Evita usar morgan. Usa el flag `--watch` con Node.js nativo o herramientas modernas como PM2."
        }
      ],
      "patterns": [{
        "group": ["../*"],
        "message": "Evita usar rutas relativas como '../'. Usa los alias definidos en el proyecto para mejorar la claridad y consistencia."
      }]
    }
  ]
};