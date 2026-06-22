import eslintParserHTML from "@html-eslint/parser";
import html from "@html-eslint/eslint-plugin";

export default [
  {
    name: "html",
    files: ["**/*.html"],
    languageOptions: {
      parser: eslintParserHTML,
    },
    plugins: { html },
    settings: {
      "html/indent": "+2",
      "html/report-bad-indent": "error",
    },
    rules: {
      "html/indent": ["error", 2],
      "@html-eslint/require-closing-tags": "error",
      "@html-eslint/no-extra-spacing-attrs": "error",
    },
  },
];
