module.exports = {
  "extends": [
    "standard",
    "prettier",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "plugins": [
    "prettier",
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  "env": {
    "node": true,
    "es2021": true
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "single"],  // Comillas simples en JS
    "no-console": "error",
    "jsx-quotes": ["error", "prefer-double"]  // Comillas dobles en JSX
  },
  "settings": {
    "react": {
      "version": "detect"  // Detecta automáticamente la versión de React
    }
  }
};