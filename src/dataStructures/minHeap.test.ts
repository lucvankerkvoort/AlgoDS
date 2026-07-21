import { MinHeap } from "./minHeap";

test("push/pop yields ascending order", () => {
  const heap = new MinHeap();
  for (const v of [5, 3, 8, 1, 9, 2]) heap.push(v);
  expect(heap.peek()).toBe(1);

  const out: number[] = [];
  while (heap.length > 0) out.push(heap.pop());
  expect(out).toEqual([1, 2, 3, 5, 8, 9]);
});
