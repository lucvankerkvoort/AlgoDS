/**
 * Approach: if total gas >= total cost, a solution is guaranteed to
 * exist. Track a running tank balance while scanning; whenever it goes
 * negative, the current start (and every station up to here) cannot be
 * the answer, so reset the candidate start to the next station and the
 * running tank to 0. Time: O(n). Space: O(1).
 */

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const totalGas = gas.reduce((a, b) => a + b, 0);
  const totalCost = cost.reduce((a, b) => a + b, 0);
  if (totalGas < totalCost) return -1;

  let start = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return start;
}
