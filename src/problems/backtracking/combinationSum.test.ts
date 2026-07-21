import { combinationSum } from "./combinationSum";

function normalize(result: number[][]): string[] {
  return result.map((c) => JSON.stringify(c)).sort();
}

test("finds all combinations summing to target with repeats allowed", () => {
  expect(normalize(combinationSum([2, 3, 6, 7], 7))).toEqual(
    normalize([
      [2, 2, 3],
      [7],
    ])
  );
  expect(normalize(combinationSum([2, 3, 5], 8))).toEqual(
    normalize([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ])
  );
});
