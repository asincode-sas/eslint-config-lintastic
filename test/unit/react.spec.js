import assert from "node:assert/strict";
import { describe, it } from "node:test";

import react from "#lib/react";

describe("React", () => {
  it("Sould have well formed config", () => {
    const [base, tests] = react;

    assert.equal(react.length, 3, "No tiene los bloques requeridos");
    assert.ok(base, "No cuenta con el bloque de React");
    assert.ok(tests, "No cuenta con el bloque de Testing");

    const { rules, settings } = base;

    // Validación de reglas más importantes:
    assert.deepStrictEqual(rules["react/jsx-no-useless-fragment"], ["error", { allowExpressions: true }]);
    assert.equal(rules["id-length"], "off");

    // Validación de settings
    assert.ok(settings, "No tiene las el objeto settings");
    assert.ok(settings.react, "No tiene la propiedad react en el objeto settings");
  });
});