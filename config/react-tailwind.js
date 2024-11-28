import tailwindcss from "eslint-plugin-tailwindcss";
import readableTailwind from "eslint-plugin-readable-tailwind";

import config from "./react.js";

const [ignores, rulesets] = config;

rulesets.settings = {
  ...rulesets.settings,
  tailwindcss: {
    callees: ["classNames"],
  }
}

rulesets.plugins = {
  ...rulesets.plugins,
  tailwindcss,
  "readable-tailwind": readableTailwind,
}

rulesets.rules = {
  ...rulesets.rules
}

/** @type {import("eslint").Linter.Config[]} */
export default [
  ignores, rulesets
]