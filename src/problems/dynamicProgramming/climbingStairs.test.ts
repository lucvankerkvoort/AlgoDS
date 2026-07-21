import { climbStairs } from "./climbingStairs";

test("counts distinct ways to climb n stairs", () => {
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(5)).toBe(8);
  expect(climbStairs(1)).toBe(1);
});
