import { describe, test, expect } from "vitest";
import rulesets from "#lib/node"

describe("Node", () => {
  test("Sould have well formed js & ts config", () => {
    rulesets.forEach((ruleset) => {
      const { name, languageOptions, rules } = ruleset;
      if (!name || name.startsWith("typescript-eslint") || name.startsWith('jsdoc')) return;
      console.log("Evaluating", name);
      expect(name).toBeDefined();
      expect(languageOptions).toBeDefined();
      expect(rules).toBeDefined();
    });
  });
});