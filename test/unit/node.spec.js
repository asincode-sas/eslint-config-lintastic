import assert from "node:assert/strict";
import { describe, it } from "node:test";

import rulesets from "#lib/node"

describe("Node", () => {
  it("Sould have well formed js & ts config", () => {
    rulesets.forEach((ruleset) => {
      const { name, languageOptions, rules } = ruleset;
      assert.ok(name, "No cuenta con el bloque languageOptions");
      assert.ok(languageOptions, "No cuenta con el bloque languageOptions");
      assert.ok(rules, "No cuenta con el bloque rules");
    });
  });
});