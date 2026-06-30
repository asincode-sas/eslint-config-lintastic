import { describe, test, expect } from "vitest";

import react from "#rules/react";

describe("React", () => {
  test("Sould have well formed config", () => {
    const [_, base, tests] = react;
    expect(base).toBeDefined();
    expect(tests).toBeDefined();
    expect(base).toHaveProperty("rules");
    expect(base).toHaveProperty("settings");

    const { rules, settings } = base as {
      rules: Record<string, unknown>;
      settings: unknown;
    };

    expect(rules).toHaveProperty("id-length");
    expect(rules["id-length"]).toBe("off");
    expect(settings).toBeDefined();
    expect(settings).toHaveProperty("react");
  });
});
