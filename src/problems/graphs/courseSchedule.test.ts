import { canFinish } from "./courseSchedule";

test("detects whether all courses can be completed", () => {
  expect(canFinish(2, [[1, 0]])).toBe(true);
  expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  expect(
    canFinish(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ])
  ).toBe(true);
});
