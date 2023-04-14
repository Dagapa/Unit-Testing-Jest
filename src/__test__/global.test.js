const text = "Hola Mundo";
const fruits = ["manzana", "melon", "banana"];
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("¿Tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

test("Probar un Callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});
