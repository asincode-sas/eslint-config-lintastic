import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { node as config } from "../../config/index.js"

describe('Node.js', () => {
  it('Sould have well formed js & ts config', () => {
    config.forEach((ruleset) => {
      const { name, languageOptions, rules } = ruleset;
      assert.ok(name, 'No cuenta con el bloque languageOptions');
      assert.ok(languageOptions, 'No cuenta con el bloque languageOptions');
      assert.ok(rules, 'No cuenta con el bloque rules');
    });
  });
});