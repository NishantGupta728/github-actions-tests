const {
  add,
  subtract,
  multiply
} = require("../src/calculator");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplied two numbers", () => {
  expect(multiply(4, 3)).toBe(12);
});