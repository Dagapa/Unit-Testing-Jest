const randomStrings = require("../index");

describe("Probar la funcionalidad de la función randomStrings", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomStrings()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
