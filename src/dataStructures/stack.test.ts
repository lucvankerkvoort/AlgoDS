import { Stack, MinStack } from "./stack";

test("Stack push/pop/peek", () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toBe(3);
  expect(s.pop()).toBe(3);
  expect(s.length).toBe(2);
  expect(s.isEmpty()).toBe(false);
});

test("MinStack tracks running minimum", () => {
  const ms = new MinStack();
  ms.push(5);
  ms.push(2);
  ms.push(7);
  expect(ms.getMin()).toBe(2);
  ms.pop();
  expect(ms.getMin()).toBe(2);
  ms.pop();
  expect(ms.getMin()).toBe(5);
});
