import { isValid } from "./validParentheses";

test("validates matching brackets", () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("(]")).toBe(false);
  expect(isValid("([)]")).toBe(false);
  expect(isValid("{[]}")).toBe(true);
  expect(isValid("(")).toBe(false);
});
