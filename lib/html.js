import eslintParserHTML from "@html-eslint/parser";
import html from "eslint-plugin-html"

export default [
  {
    name: "html",
    files: ["**/*.html"],
    languageOptions: {
      parser: eslintParserHTML
    },
    plugins: { html },
    settings: {
      "html/indent": "+2",
      "html/report-bad-indent": "error",
    },
  },
]