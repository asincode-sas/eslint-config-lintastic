import { describe, test, expect } from "vitest";

import { ESLint } from "eslint";
import { fileURLToPath, URL } from "node:url";

import baseConfig from "#rules/node";

describe("Integration Test -> Node", () => {
  test("node:base should well integrated", async () => {
    const eslint = new ESLint({ baseConfig });

    const dir = fileURLToPath(new URL("../samples", import.meta.url));

    const [
      {
        errorCount,
        fatalErrorCount,
        warningCount,
        fixableErrorCount,
        fixableWarningCount,
      },
    ] = await eslint.lintFiles([`${dir}/**`]);

    expect(errorCount).toBeGreaterThan(0);
    expect(fatalErrorCount).toBe(0);
    expect(warningCount).toBe(0);
    expect(fixableErrorCount).toBe(4);
    expect(fixableWarningCount).toBe(0);
  });
});
