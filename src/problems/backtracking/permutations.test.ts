import { permute } from "./permutations";

function normalize(result: number[][]): string[] {
  return result.map((p) => JSON.stringify(p)).sort();
}

test("generates all permutations", () => {
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  expect(normalize(permute([1, 2, 3]))).toEqual(normalize(expected));
  expect(permute([0])).toEqual([[0]]);
});
