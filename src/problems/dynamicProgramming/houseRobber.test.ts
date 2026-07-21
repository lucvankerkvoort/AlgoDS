import { rob } from "./houseRobber";

test("maximizes non-adjacent sum", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
  expect(rob([])).toBe(0);
  expect(rob([5])).toBe(5);
});
