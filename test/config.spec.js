import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import * as modules from "../config/index.js"

describe('Modules Base Config', () => {
  Object.entries(modules).forEach(([key, [config]]) => {
    it(`should have a main block in module "${key}"`, () => {
      assert.ok(config, `El módulo "${key}" debería estar definido`);

      // Verifica que el módulo tenga un bloque principal `name`
      assert.ok(config.name, `El módulo "${key}" debería tener un bloque main`);


      // Verifica que `languageOptions` sea un objeto
      assert.ok(
        typeof config.languageOptions === 'object' && config.languageOptions !== null,
        `El módulo ${key} no tiene un bloque 'languageOptions' válido.`
      );

      // Verifica que `rules` tenga contenido
      assert.ok(
        Object.keys(config.rules).length > 0,
        `El módulo ${key} no tiene reglas ('rules') o están vacías.`
      );
    });
  });
});