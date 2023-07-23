// Modules
import Graph, { VertexKey } from './modules/Graph';
import Queue from './modules/Queue';

// Local types

export type VisitedVertexKeys = { [key: VertexKey]: true }

export function recursiveDFS(
  startVertex: VertexKey,
  endVertex: VertexKey,
  graph: Graph,
  routes: VertexKey[] = [],
  visited: VisitedVertexKeys = {},
): string | null {
  if (startVertex === endVertex) {
    return routes.concat(startVertex).join('->');
  } else {
    visited[startVertex] = true
    const siblings = graph.getSiblings(startVertex);
    for (let i = siblings.length - 1; i > -1; i--) {
      const sibling = siblings[i]
      if (visited[sibling]) continue;
      const nextRoutes =
        recursiveDFS(
          sibling,
          endVertex,
          graph,
          [...routes, startVertex],
          visited
        )
      if (nextRoutes) return nextRoutes;
    }
  }
  return null;
}

export type VertexNode = {
  vertexKey: VertexKey,
  routes: VertexKey[]
};

export function _recursiveBFS(
  queue: Queue<VertexNode> = new Queue(),
  endVertex: VertexKey,
  graph: Graph,
  visited: VisitedVertexKeys = {},
) {
  if (queue.size() === 0) return null;
  const vertexNode = queue.get()!;
  if (vertexNode.vertexKey === endVertex) {
    return vertexNode.routes.concat(vertexNode.vertexKey).join('->');
  } else {
    visited[vertexNode.vertexKey] = true
    const siblings = graph.getSiblings(vertexNode.vertexKey);
    for (let i = 0; i < siblings.length; i++) {
      if (visited[siblings[i]]) continue;
      queue.set({
        vertexKey: siblings[i],
        routes: [...vertexNode.routes, vertexNode.vertexKey]
      })
    }
    return _recursiveBFS(
      queue,
      endVertex,
      graph,
      visited
    )
  }
}

export function recursiveBFS(
  startVertex: VertexKey,
  endVertex: VertexKey,
  graph: Graph,
  visited: VisitedVertexKeys = {},
): string | null {
  const queue = new Queue<VertexNode>()
  queue.set({ vertexKey: startVertex, routes: [] })
  return _recursiveBFS(queue, endVertex, graph, visited);
}
