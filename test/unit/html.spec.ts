import { describe, expect, test } from "vitest";
import htmlRules from "#lib/rules/html";

describe("HTML", () => {
  test("Sould have well formed config", () => {
    console.log(htmlRules);
    htmlRules.forEach((ruleset) => {
      const { name, rules } = ruleset;
      if (!name) return;
      expect(name).toBeDefined();
      expect(rules).toBeDefined();
      expect(rules).toHaveProperty("html/indent");
    });
  });
});
