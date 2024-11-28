import config from "./react.js";

const [ignores, rulesets] = config;

/** @type {import("eslint").Linter.Config[]} */
export default [
    ignores, rulesets
]