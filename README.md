# Lintastic

Una configuración de linting personalizable y extensible para mejorar la calidad del código en tus proyectos JavaScript y TypeScript.

## Introducción

`lintastic-config` es una solución diseñada para estandarizar y optimizar el proceso de linting en tus proyectos. Este repositorio proporciona una configuración de ESLint que se adapta a las mejores prácticas de la comunidad y puede ser fácilmente ajustada según tus necesidades.

## Características

- **Configuración lista para usar**: Comienza rápidamente con una configuración predefinida.
- **Extensibilidad**: Agrega o modifica reglas según los requisitos de tu proyecto.
- **Soporte para JavaScript y TypeScript**: Compatible con ambos lenguajes.
- **Integración fácil**: Sencilla instalación y configuración en tus proyectos existentes.

## Instalación

Para usar `lintastic-config` en tu proyecto, sigue estos pasos:

1. **Instala ESLint**:

```bash
npm install --save-dev https://github.com/asincode-sas/lintastic.git
```

2. ** Instala `lintastic`:**

```javascript
module.exports = {
  extends: 'lintastic-config',
};
```

3. **Crea un archivo de configuración de ESLint (`.eslintrc.js`) en la raíz de tu proyecto y extiende la configuración:**

```javascript
module.exports = {
  extends: 'lintastic-config',
};
```

## Uso

Para ejecutar ESLint en tu proyecto, agrega un script en tu `package.json`:

```javascript
"scripts": {
  "lint": "eslint ."
}
```

Luego, puedes ejecutar el linting con:

```javascript
npm run lint
```
