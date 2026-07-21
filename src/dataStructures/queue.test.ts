import { Queue, CircularQueue } from "./queue";

test("Queue enqueue/dequeue", () => {
  const q = new Queue<number>();
  q.enqueue(1);
  q.enqueue(2);
  expect(q.dequeue()).toBe(1);
  expect(q.length).toBe(1);
  expect(q.isEmpty()).toBe(false);
});

test("CircularQueue wraps around a fixed buffer", () => {
  const cq = new CircularQueue<string>(3);
  cq.enqueue("a");
  cq.enqueue("b");
  cq.enqueue("c");
  expect(cq.dequeue()).toBe("a");
  cq.enqueue("d");
  expect([cq.dequeue(), cq.dequeue(), cq.dequeue()]).toEqual(["b", "c", "d"]);
});
