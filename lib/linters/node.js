import rules from "./rules";

export default {
  "extends": [
    "standard",
    "prettier"
  ],
  "env": {
    "node": true,
    "es2021": true
  },
  "plugins": [
    "prettier"
  ],
  "rules": rules,
  "settings": {
    "react": {
      "version": "detect"  // Detecta automáticamente la versión de React
    }
  }
};