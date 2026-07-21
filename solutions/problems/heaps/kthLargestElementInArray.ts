/**
 * Approach: maintain a min-heap of size k as we scan the array. After
 * processing all elements, the heap's smallest element (its root) is the
 * kth largest overall. Implemented here with a small array-backed heap.
 * Time: O(n log k). Space: O(k).
 */

export function findKthLargest(nums: number[], k: number): number {
  const heap: number[] = [];

  const siftUp = (i: number) => {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else break;
    }
  };
  const siftDown = (i: number) => {
    const n = heap.length;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let smallest = i;
      if (l < n && heap[l] < heap[smallest]) smallest = l;
      if (r < n && heap[r] < heap[smallest]) smallest = r;
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
  };

  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
      siftUp(heap.length - 1);
    } else if (num > heap[0]) {
      heap[0] = num;
      siftDown(0);
    }
  }
  return heap[0];
}
