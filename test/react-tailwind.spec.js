import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { reactTailwind } from "../config/index.js"

describe('React Tailwind', () => {
  it('Sould have well formed config', () => {
    const [react, tests] = reactTailwind;

    assert.equal(reactTailwind.length, 2, 'No tiene los bloques requeridos');
    assert.ok(react, 'No cuenta con el bloque de React');
    assert.ok(tests, 'No cuenta con el bloque de Testing');

    const { plugins, rules } = react;

    assert.ok(plugins.tailwindcss, 'Tiene el plugion de tailwindcss')
    
    assert.ok(rules.tailwindcss, 'Tiene las reglas de tailwindcss')
  });
});