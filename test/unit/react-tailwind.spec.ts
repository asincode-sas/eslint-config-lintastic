import { describe, test, expect } from "vitest";

import reactTailwind from "#rules/react-tailwind";

describe("React Tailwind", () => {
  test("Sould have well formed config", () => {
    const [_, base, tests] = reactTailwind;

    expect(base).toBeDefined();
    expect(tests).toBeDefined();

    const { rules, plugins } = base;
    expect(rules).toBeDefined();
    expect(plugins).toBeDefined();
  });
});
