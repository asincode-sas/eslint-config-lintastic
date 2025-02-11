import eslintParserHTML from "@html-eslint/parser";
import html from "eslint-plugin-html";
import ignores from "#src/ignores";

export default [
  {
    name: "html",
    files: ["**/*.html"],
    languageOptions: {
      parser: eslintParserHTML
    },
    plugins: { html },
    ignores,
    settings: {
      "html/indent": "+2",
      "html/report-bad-indent": "error",
    },
  },
]