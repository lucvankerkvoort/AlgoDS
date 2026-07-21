/**
 * LeetCode 295. Find Median from Data Stream
 *
 * Design a structure that supports adding numbers one at a time and
 * efficiently retrieving the median of all numbers added so far.
 *
 * Hint: two heaps splitting the stream at the median -- a max-heap for
 * the smaller half, a min-heap for the larger half, kept balanced in
 * size (differ by at most 1) after every insert.
 * Aim for O(log n) per add, O(1) per findMedian.
 */

export class MedianFinder {
  addNum(num: number): void {
    throw new Error("Not implemented");
  }

  findMedian(): number {
    throw new Error("Not implemented");
  }
}
