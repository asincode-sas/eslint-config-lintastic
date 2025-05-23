# Lintastic

[![.github/workflows/unit_testing.yaml](https://github.com/asincode-sas/eslint-config-lintastic/actions/workflows/unit_testing.yaml/badge.svg)](https://github.com/asincode-sas/eslint-config-lintastic/actions/workflows/unit_testing.yaml)

Una configuración de linting personalizable y extensible para mejorar la calidad del código en tus proyectos JavaScript y TypeScript.

## Introducción

`lintastic` es una solución diseñada para estandarizar y optimizar el proceso de linting en tus proyectos. Este repositorio proporciona una configuración de ESLint que se adapta a las mejores prácticas de la comunidad y puede ser fácilmente ajustada según tus necesidades.

## Características

- **Configuración lista para usar**: Comienza rápidamente con una configuración predefinida.
- **Extensibilidad**: Agrega o modifica reglas según los requisitos de tu proyecto.
- **Soporte para JavaScript y TypeScript**: Compatible con ambos lenguajes.
- **Integración fácil**: Sencilla instalación y configuración en tus proyectos existentes.

## Instalación

Para usar `lintastic` en tu proyecto, sigue estos pasos:

1. **Instala las dependencias necesarias**:

    ```bash
    npm install --save-dev eslint https://github.com/asincode-sas/eslint-config-lintastic.git
    ```

2. **Crea o modifica  el archivo de configuración (`eslint.config.js`) en la raíz de tu proyecto y extiende la configuración:**

    Configuración simplificada (recomendada):

    ```javascript
    export { node as default } from 'eslint-config-lintastic';
    ```

    Configuración Extendida:

    ```javascript
    import { node } from 'eslint-config-lintastic';

    export default [
      ...node,
      {
        name: "node:custom",
        rules: {
          // Add your custom rules here
        }
      }
    ];
    ```

    | Configuraciones disponibles: `react`, `reactTailwind`, `node` y `test` para proyectos de sólo pruebas

## Uso

Para ejecutar ESLint en tu proyecto, agrega un script en tu `package.json`:

```json
"scripts": {
  "lint": "npx eslint ."
}
```

Luego, puedes ejecutar el linting con:

```javascript
npm run lint
```

## Ejemplos

Aplicar configuraciones en el archivo `eslint.config.js`

### Node App

Configuración básica:

```javascript
export { node as default } from 'eslint-config-lintastic';
```

Configuración avanzada:

```javascript
import { node } from 'eslint-config-lintastic';

export default [...node, {
  name: "node:custom",
  rules: {
    // Add custom rules
  }
}];
```

### React Legacy (Create React App / React Scripts / Weppack)

Configuración básica:

```javascript
export { react as default } from 'eslint-config-lintastic';
```

Configuración avanzada:

```javascript
import { react } from 'eslint-config-lintastic';

export default [...react, {
  name: "react:custom",
  rules: {
    // Add custom rules
  }
}];
```

### React & Tailwind

Configuración básica:

```javascript
export { reactTailwind as default } from 'eslint-config-lintastic';
```

Configuración avanzada:

```javascript
import { reactTailwind } from 'eslint-config-lintastic';

export default [...reactTailwind, {
  name: "tailwindcss:custom",
  rules: {
    'tailwindcss/no-custom-classname': [
      'error',
      {
        config: path.join(
          path.dirname(fileURLToPath(import.meta.url)),
          './tailwind.config.js'
        ),
        whitelist: ['fa-', '^fa-[a-z-]+$', 'show', 'hide', 'loader'],
      },
    ]
  }
}];
```

## Reinstalación

Para reinstalar `lintastic` en tu proyecto, sigue estos pasos:

1. Borrando el archivo lock

    ```bash
    rm package-lock.json
    npm i
    ```

2. Desinstalando y reinstalando la librería

    ```bash
    npm uninstall eslint-config-lintastic
    npm i -D eslint https://github.com/asincode-sas/eslint-config-lintastic.git
    ```
