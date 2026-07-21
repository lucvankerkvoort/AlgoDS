import { threeSum } from "./threeSum";

function normalize(triplets: number[][]): string[] {
  return triplets.map((t) => JSON.stringify(t)).sort();
}

test("finds unique triplets summing to zero", () => {
  expect(normalize(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(
    normalize([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  );
  expect(threeSum([0, 1, 1])).toEqual([]);
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
