import { subsets } from "./subsets";

function normalize(result: number[][]): string[] {
  return result.map((s) => JSON.stringify(s)).sort();
}

test("generates the full power set", () => {
  const expected = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];
  expect(normalize(subsets([1, 2, 3]))).toEqual(normalize(expected));
  expect(subsets([])).toEqual([[]]);
});
