import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { node as config } from "../config/index.js"

describe('Node.js', () => {
  const [js, ts, test] = config;

  it('Sould have well formed js & ts config', () => {
    [js, ts].forEach((ruleset) => {
      console.log('Ruleset is', ruleset);

      const { name, languageOptions, plugins, rules } = ruleset;

      // Validación existencia de bloques
      assert.ok(name, 'No cuenta con el bloque main');
      assert.ok(languageOptions, 'No cuenta con el bloque languageOptions');
      assert.ok(plugins, 'No cuenta con el bloque plugins');
      assert.ok(rules, 'No cuenta con el bloque rules');

      // Validación de plugins
      assert.ok(plugins['jsdoc'], 'No cuenta con el el plugin de jsdoc');
      assert.ok(plugins['editorconfig'], 'No cuenta con el el plugin de editorconfig');

      // Validación de reglas más importantes:
      assert.ok(rules, 'No tiene las reglas definidas');
      assert.ok(rules['no-unused-vars'], 'No cuenta con la regla no-unused-vars');
      assert.ok(rules['no-useless-catch'], 'No cuenta con la regla no-useless-catch');
    });
  });

  it('Sould have well formed tests config', () => {
    assert.ok(test.name, 'No cuenta con el bloque main');
    assert.ok(test.languageOptions, 'No cuenta con el bloque languageOptions');
  });

});