import { DoublyLinkedList } from "./doublyLinkedList";

test("append, prepend, remove", () => {
  const dll = new DoublyLinkedList();
  dll.append(1);
  const n2 = dll.append(2);
  dll.append(3);
  dll.prepend(0);
  expect(dll.toArray()).toEqual([0, 1, 2, 3]);

  dll.remove(n2);
  expect(dll.toArray()).toEqual([0, 1, 3]);
  expect(dll.size).toBe(3);
});

test("empty list", () => {
  const dll = new DoublyLinkedList();
  expect(dll.toArray()).toEqual([]);
  expect(dll.size).toBe(0);
});
