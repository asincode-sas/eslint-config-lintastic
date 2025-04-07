import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { ESLint } from "eslint";
import { fileURLToPath } from "url";

import baseConfig from "#lib/react-tailwind";


describe("Integration Test -> Node", () => {
  it('node:base should well integrated', async () => {
    const eslint = new ESLint({ baseConfig });

    const dir = fileURLToPath(new URL("../samples", import.meta.url));

    const [{ errorCount, fatalErrorCount, warningCount, fixableErrorCount, fixableWarningCount, messages }] = await eslint.lintFiles([`${dir}/**`]);

    console.log("messages", messages);

    assert.equal(errorCount, 18);
    assert.equal(fatalErrorCount, 0);
    assert.equal(warningCount, 0);
    assert.equal(fixableErrorCount, 10);
    assert.equal(fixableWarningCount, 0);
  });
});