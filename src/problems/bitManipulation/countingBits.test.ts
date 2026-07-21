import { countBits } from "./countingBits";

test("counts set bits for every number up to n", () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  expect(countBits(0)).toEqual([0]);
});
