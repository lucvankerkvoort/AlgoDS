/**
 * Approach: push open brackets on a stack; on a close bracket, it must
 * match the top of the stack. Valid iff the stack is empty at the end.
 * Time: O(n). Space: O(n).
 */

export function isValid(s: string): boolean {
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  const stack: string[] = [];
  for (const ch of s) {
    if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}
