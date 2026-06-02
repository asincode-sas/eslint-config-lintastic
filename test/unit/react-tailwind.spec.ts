import { describe, test, expect } from "vitest";

import reactTailwind from "#lib/react-tailwind";

describe("React Tailwind", () => {
  test("Sould have well formed config", () => {
    const [_, base, tests] = reactTailwind;

    expect(base).toBeDefined();
    expect(tests).toBeDefined();

    const { settings } = base;

    expect(settings).toBeDefined();
    expect(settings?.react).toBeDefined();
  });
});