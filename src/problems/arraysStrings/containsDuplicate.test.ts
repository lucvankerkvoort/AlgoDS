import { containsDuplicate } from "./containsDuplicate";

test("detects duplicate values", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  expect(containsDuplicate([])).toBe(false);
});
