import { describe, test, expect } from "vitest";

import { ESLint } from "eslint";
import { fileURLToPath } from "url";

import baseConfig from "#lib/rules/react-tailwind";

describe("Integration Test -> React Tailwind", () => {
  test("react-tailwind:base should well integrated", async () => {
    const eslint = new ESLint({ baseConfig });

    const dir = fileURLToPath(new URL("../samples", import.meta.url));
    console.log(dir);
    const [
      {
        errorCount,
        fatalErrorCount,
        warningCount,
        fixableErrorCount,
        fixableWarningCount,
      },
    ] = await eslint.lintFiles([`${dir}/**`]);

    expect(errorCount).toBe(12);
    expect(fatalErrorCount).toBe(0);
    expect(warningCount).toBe(0);
    expect(fixableErrorCount).toBe(4);
    expect(fixableWarningCount).toBe(0);
  });
});
