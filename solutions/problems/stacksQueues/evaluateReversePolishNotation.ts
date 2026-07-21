/**
 * Approach: a stack. Push numbers; on an operator, pop the two most
 * recent operands, apply the operator, and push the result back.
 * Time: O(n). Space: O(n).
 */

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const ops: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b), // truncate toward zero, per the spec
  };

  for (const tok of tokens) {
    if (tok in ops) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(ops[tok](a, b));
    } else {
      stack.push(Number(tok));
    }
  }
  return stack[stack.length - 1];
}
