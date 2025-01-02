# Lintastic

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

2. **Crea o modifica  el archivo de configuración (`.eslint.config.js`) en la raíz de tu proyecto y extiende la configuración:**

```javascript
// Extendida
import { react } from 'eslint-config-lintastic';
export default {
  ...react,
  // Custom config, plugins & rules
};

// Simplificada
export { react as default } from 'eslint-config-lintastic';
```


| Configuraciones disponibles: `react`, `reactTailwind`, `reactBoostrap`, `node`, `nodeExpress` 

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


### Tailwind con clases adicionales permitidas

```javascript
import path from 'path';
import { fileURLToPath } from 'node:url';

import { reactTailwind } from 'eslint-config-lintastic';

const [ignore, ruleset] = reactTailwind;

ruleset.settings = {
  ...ruleset.settings,
  react: { version: '18.3' },
};

ruleset.rules = {
  ...ruleset.rules,
  'tailwindcss/no-custom-classname': [
    'error',
    {
      config: path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        './tailwind.config.js'
      ),
      whitelist: ['fa-', '^fa-[a-z-]+$', 'show', 'hide', 'loader'],
    },
  ],
};

export default [ignore, ruleset];
```
