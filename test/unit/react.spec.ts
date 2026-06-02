import { describe, test, expect } from "vitest";

import react from "#lib/react";

describe("React", () => {
  test("Sould have well formed config", () => {
    const [_, base, tests] = react;

    console.log(base);
    expect(base).toBeDefined();
    expect(tests).toBeDefined();
    expect(base).toHaveProperty("rules");
    expect(base).toHaveProperty("settings");
    expect(tests).toHaveProperty("rules");

    const { rules, settings } = base as {
      rules: Record<string, unknown>;
      settings: unknown;
    };

    expect(rules).toHaveProperty("react/jsx-no-useless-fragment");
    expect(rules).toHaveProperty("id-length");
    expect(rules["id-length"]).toBe("off");
    expect(settings).toBeDefined();
    expect(settings).toHaveProperty("react");
  });
});
