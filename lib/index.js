module.exports = [
  {
    files: ["*"],
    extends: [
      "standard",
      "prettier"
    ]
  },
  {
    files: ["**/*.md"],
    plugins: ["markdown"],
    language: "markdown/commonmark",
    rules: {
      "markdown/no-html": "error"
    }
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Cambié los pipes '|' por comas ',' para que sea válido
    env: {
      node: true,
      es2024: true
    },
    plugins: ["jsdoc"],
    rules: {
      "prettier/prettier": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-console": "error"
    }
  },
  {
    files: ["**/*.{css,sass,scss}"], // Cambié los pipes '|' por comas ',' para que sea válido
    plugins: ["css"]
  }
];
