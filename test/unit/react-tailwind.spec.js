import assert from "node:assert/strict";
import { describe, it } from "node:test";

import reactTailwind from "#lib/react-tailwind";

describe("React Tailwind", () => {
  it("Sould have well formed config", () => {
    const [react, tailwindBase, tailwindRules, tests] = reactTailwind;

    assert.equal(reactTailwind.length, 4, "No tiene los bloques requeridos");
    assert.ok(react, "No cuenta con el bloque de React");
    assert.ok(tailwindBase, "No cuenta con el bloque de tailwindcss:base");
    assert.ok(tailwindRules, "No cuenta con el bloque de tailwindcss:rules");
    assert.ok(tests, "No cuenta con el bloque de Testing");

    const { settings } = react;

    // Validación de settings
    assert.ok(settings, "No tiene las el objeto settings");
    assert.ok(settings.react, "No tiene la propiedad react en el objeto settings");
  });
});