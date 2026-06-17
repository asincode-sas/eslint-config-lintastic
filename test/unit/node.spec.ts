import { describe, test, expect } from "vitest";
import rulesets from "#lib/rules/node";

describe("Node", () => {
  test("Sould have well formed js & ts config", () => {
    rulesets.forEach((ruleset) => {
      const { name, rules } = ruleset;
      if (
        !name ||
        name.startsWith("typescript-eslint") ||
        name.startsWith("jsdoc")
      )
        return;
      expect(name).toBeDefined();
      expect(rules).toBeDefined();
    });
  });
});
