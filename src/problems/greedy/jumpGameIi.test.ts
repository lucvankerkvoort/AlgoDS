import { jump } from "./jumpGameIi";

test("computes the minimum number of jumps to the end", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
  expect(jump([2, 3, 0, 1, 4])).toBe(2);
  expect(jump([0])).toBe(0);
});
