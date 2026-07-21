import { MinStack } from "./minStack";

test("tracks the running minimum in O(1)", () => {
  const ms = new MinStack();
  ms.push(-2);
  ms.push(0);
  ms.push(-3);
  expect(ms.getMin()).toBe(-3);
  ms.pop();
  expect(ms.top()).toBe(0);
  expect(ms.getMin()).toBe(-2);
});
