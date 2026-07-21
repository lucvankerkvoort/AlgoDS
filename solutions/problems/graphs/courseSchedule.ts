/**
 * Approach: Kahn's algorithm (BFS topological sort). Compute in-degrees,
 * start a queue with all zero-in-degree nodes, and repeatedly remove
 * them while decrementing their neighbors' in-degrees. If every node
 * gets processed, there's no cycle. Time: O(V + E). Space: O(V + E).
 */

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course] += 1;
  }

  const queue: number[] = [];
  for (let c = 0; c < numCourses; c++) if (inDegree[c] === 0) queue.push(c);

  let visited = 0;
  while (queue.length > 0) {
    const node = queue.shift()!;
    visited += 1;
    for (const next of graph[node]) {
      inDegree[next] -= 1;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return visited === numCourses;
}
