import rules from "./rules";

export default {
  "extends": [
    "standard",
    "prettier",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es2024": true
  },
  "plugins": [
    "prettier",
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  "rules": {
    ...rules,
    "jsx-quotes": ["error", "prefer-double"]  // Comillas dobles en JSX
  },
  "settings": {
    "react": {
      "version": "detect"  // Detecta automáticamente la versión de React
    }
  }
};
