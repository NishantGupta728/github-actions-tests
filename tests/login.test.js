const login = require("../src/login");

test("valid login credentials", () => {
  expect(login("admin", "1234")).toBe(true);
});

test("invalid login credentials", () => {
  expect(login("admin", "wrong")).toBe(false);
});