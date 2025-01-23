import assert from "node:assert/strict";
import { describe, it } from "node:test";

import * as modules from "#lib/index"

describe("Modules Base Config", () => {
  Object.entries(modules).forEach(([key, [config]]) => {
    it(`should have a main block in module "${key}"`, () => {
      assert.ok(config, `El módulo "${key}" debería estar definido`);

      const { name, languageOptions, plugins, rules } = config;

      // Verifica que el módulo tenga un bloque principal `name`
      assert.ok(name, `El módulo "${key}" debería tener un bloque main`);

      // Verifica que `languageOptions` sea un objeto
      assert.ok(
        typeof languageOptions === "object" && languageOptions !== null,
        `El módulo ${key} no tiene un bloque "languageOptions" válido.`
      );

      // Verifica que `rules` tenga contenido
      assert.ok(
        Object.keys(config.rules).length > 0,
        `El módulo ${key} no tiene reglas ("rules") o están vacías.`
      );

      if (name === "node:tests") {
        return
      }

      assert.ok(languageOptions, "No cuenta con el bloque languageOptions");
      assert.ok(plugins, "No cuenta con el bloque plugins");
      assert.ok(rules, "No cuenta con el bloque rules");

      // Validación de plugins
      assert.ok(plugins["jsdoc"], "No cuenta con el el plugin de jsdoc");

      // Validación de reglas más importantes:
      assert.ok(rules, "No tiene las reglas definidas");
      assert.ok(rules["complexity"], "No cuenta con la regla complexity");
      assert.ok(rules["no-unused-vars"], "No cuenta con la regla no-unused-vars");
      assert.ok(rules["no-useless-catch"], "No cuenta con la regla no-useless-catch");
      assert.ok(rules["jsdoc/require-example"], "No cuenta con la regla jsdoc/require-example");
      assert.ok(rules["jsdoc/require-example"], "No cuenta con la regla jsdoc/require-example");

      // Excepciones
      assert.equal(rules["no-console"], "off");
      assert.equal(rules["no-magic-numbers"], "off");
    });
  });
});