import { describe, test, expect } from "vitest";

import { ESLint } from "eslint";
import { fileURLToPath } from "url";

import baseConfig from "#rules/react-tailwind";

describe("Integration Test -> React Tailwind", () => {
  test("react-tailwind:base should well integrated", async () => {
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

    expect(fatalErrorCount).toBe(0);
    expect(warningCount).toBe(0);
    
    expect(fixableWarningCount).toBe(0);
  });
});
