import { topKFrequent } from "./topKFrequentElements";

test("finds the k most frequent elements", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort()).toEqual([1, 2]);
  expect(topKFrequent([1], 1)).toEqual([1]);
});
