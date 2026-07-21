/**
 * Approach: reverse the flow. Run DFS/BFS from every Pacific-adjacent
 * border cell going "uphill" (neighbor height >= current), marking
 * reachability; do the same from every Atlantic-adjacent border cell.
 * The answer is the intersection of the two reachable sets.
 * Time: O(rows * cols). Space: O(rows * cols).
 */

export function pacificAtlantic(heights: number[][]): number[][] {
  if (heights.length === 0 || heights[0].length === 0) return [];
  const rows = heights.length;
  const cols = heights[0].length;

  const bfs = (starts: [number, number][]): Set<string> => {
    const visited = new Set(starts.map(([r, c]) => `${r},${c}`));
    const stack = [...starts];
    while (stack.length > 0) {
      const [r, c] = stack.pop()!;
      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nr = r + dr;
        const nc = c + dc;
        const key = `${nr},${nc}`;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(key)) {
          if (heights[nr][nc] >= heights[r][c]) {
            visited.add(key);
            stack.push([nr, nc]);
          }
        }
      }
    }
    return visited;
  };

  const pacificStarts: [number, number][] = [];
  const atlanticStarts: [number, number][] = [];
  for (let c = 0; c < cols; c++) {
    pacificStarts.push([0, c]);
    atlanticStarts.push([rows - 1, c]);
  }
  for (let r = 0; r < rows; r++) {
    pacificStarts.push([r, 0]);
    atlanticStarts.push([r, cols - 1]);
  }

  const pacificReach = bfs(pacificStarts);
  const atlanticReach = bfs(atlanticStarts);

  const result: number[][] = [];
  for (const key of pacificReach) {
    if (atlanticReach.has(key)) {
      const [r, c] = key.split(",").map(Number);
      result.push([r, c]);
    }
  }
  return result;
}
