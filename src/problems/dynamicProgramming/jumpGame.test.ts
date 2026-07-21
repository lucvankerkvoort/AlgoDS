import { canJump } from "./jumpGame";

test("determines if the last index is reachable", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  expect(canJump([0])).toBe(true);
});
