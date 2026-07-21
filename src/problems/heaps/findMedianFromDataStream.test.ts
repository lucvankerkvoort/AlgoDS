import { MedianFinder } from "./findMedianFromDataStream";

test("tracks the median as numbers stream in", () => {
  const mf = new MedianFinder();
  mf.addNum(1);
  mf.addNum(2);
  expect(mf.findMedian()).toBe(1.5);
  mf.addNum(3);
  expect(mf.findMedian()).toBe(2);
});
