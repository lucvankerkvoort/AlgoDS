/**
 * Approach: monotonic decreasing stack of indices. When the current
 * temperature is higher than the temperature at the index on top of the
 * stack, that day's "wait" is resolved -- pop it and record the distance.
 * Time: O(n), each index is pushed and popped at most once. Space: O(n).
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const stack: number[] = []; // indices with decreasing temperatures

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const prev = stack.pop()!;
      answer[prev] = i - prev;
    }
    stack.push(i);
  }
  return answer;
}
