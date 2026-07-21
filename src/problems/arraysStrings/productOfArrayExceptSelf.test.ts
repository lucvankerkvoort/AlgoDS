import { productExceptSelf } from "./productOfArrayExceptSelf";

// Normalize -0 to 0 before comparing: they're numerically equal, but a
// deep-equality check (like toEqual) treats them as distinct, and which
// one comes out of `0 * -3`-style products is an implementation detail.
function normalizeZero(arr: number[]): number[] {
  return arr.map((x) => x + 0);
}

test("computes product of all other elements", () => {
  expect(normalizeZero(productExceptSelf([1, 2, 3, 4]))).toEqual([24, 12, 8, 6]);
  expect(normalizeZero(productExceptSelf([-1, 1, 0, -3, 3]))).toEqual([0, 0, 9, 0, 0]);
});
