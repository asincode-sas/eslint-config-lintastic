import assert from "node:assert/strict";
import { describe, it } from "node:test";

import reactTailwind from "#lib/react-tailwind";

describe("React Tailwind", () => {
  it("Sould have well formed config", () => {
    const [base, tests] = reactTailwind;

    assert.equal(reactTailwind.length, 10, "No tiene los bloques requeridos");
    assert.ok(base, "No cuenta con el bloque de react:tailwindcss");
    assert.ok(tests, "No cuenta con el bloque de node:tests");

    const { settings } = base;

    // Validación de settings
    assert.ok(settings, "No tiene las el objeto settings");
    assert.ok(settings.react, "No tiene la propiedad react en el objeto settings");
  });
});