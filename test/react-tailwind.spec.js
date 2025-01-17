import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { reactTailwind } from "../config/index.js"

describe('React Tailwind', () => {
  it('Sould have well formed config', () => {
    const [react, tailwindBase, tailwindRules, tests] = reactTailwind;

    assert.equal(reactTailwind.length, 4, 'No tiene los bloques requeridos');
    assert.ok(react, 'No cuenta con el bloque de React');
    assert.ok(tailwindBase, 'No cuenta con el bloque de tailwindcss:base');
    assert.ok(tailwindRules, 'No cuenta con el bloque de tailwindcss:rules');
    assert.ok(tests, 'No cuenta con el bloque de Testing');

    const { plugins, rules, settings } = react;
 
    // Validación de plugins
    assert.ok(plugins['react'], 'No cuenta con el el plugin de react');
    assert.ok(plugins['readable-tailwind'], 'No cuenta con el el plugin de readable-tailwind');
    assert.ok(plugins['jsdoc'], 'No cuenta con el el plugin de jsdoc');
    assert.ok(plugins['editorconfig'], 'No cuenta con el el plugin de editorconfig');

    // Validación de reglas más importantes:
    assert.ok(rules, 'No tiene las reglas definidas');
    assert.ok(rules['no-unused-vars'], 'No cuenta con la regla no-unused-vars');
    assert.ok(rules['no-useless-catch'], 'No cuenta con la regla no-useless-catch');

    // Validación de settings
    assert.ok(settings, 'No tiene las el objeto settings');
    assert.ok(settings.react, 'No tiene la propiedad react en el objeto settings');
  });
});