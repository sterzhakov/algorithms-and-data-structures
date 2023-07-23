// Modules
import Graph, { VertexKey } from './modules/Graph';
import Stack from './modules/Stack';
import Queue from './modules/Queue';

// Local types

export type VertexNode = { vertex: VertexKey, routes: VertexKey[] }
export type VisitedVertexKeys = { [key: VertexKey]: true }

const iterativeSearch = (
  store: Stack<VertexNode> | Queue<VertexNode>,
  startVertex: VertexKey,
  endVertex: VertexKey,
  graph: Graph,
): string | null => {
  const visited: VisitedVertexKeys = {}

  store.set({
    vertex: startVertex,
    routes: [],
  })

  while (store.size() > 0) {
    const node = store.get()!
    visited[node.vertex] = true
    if (node.vertex === endVertex) {
      return node.routes.concat(node.vertex).join("->")
    } else {
      const siblings = graph.getSiblings(node.vertex)
      for (let i = 0; i < siblings.length; i++) {
        if (visited[siblings[i]]) continue
        store.set({
          routes: [...node.routes, node.vertex],
          vertex: siblings[i],
        })
      }
    }
  }

  return null;
}

export function iterativeBFS(
  startVertex: VertexKey,
  endVertex: VertexKey,
  graph: Graph,
) {
  return iterativeSearch(
    new Queue(),
    startVertex,
    endVertex,
    graph
  )
};

export function iterativeDFS(
  startVertex: VertexKey,
  endVertex: VertexKey,
  graph: Graph,
) {
  return iterativeSearch(
    new Stack(),
    startVertex,
    endVertex,
    graph
  );
}
