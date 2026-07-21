import { SinglyLinkedList } from "./singlyLinkedList";

test("append, prepend, find, delete, reverse", () => {
  const ll = new SinglyLinkedList();
  ll.append(1).append(2).append(3);
  ll.prepend(0);
  expect(ll.toArray()).toEqual([0, 1, 2, 3]);

  expect(ll.find(2)?.val).toBe(2);
  expect(ll.find(99)).toBeNull();

  expect(ll.delete(0)).toBe(true);
  expect(ll.toArray()).toEqual([1, 2, 3]);
  expect(ll.delete(999)).toBe(false);

  ll.reverse();
  expect(ll.toArray()).toEqual([3, 2, 1]);
  expect(ll.size).toBe(3);
});

test("empty list", () => {
  const ll = new SinglyLinkedList();
  expect(ll.toArray()).toEqual([]);
  expect(ll.find(1)).toBeNull();
  expect(ll.delete(1)).toBe(false);
});
