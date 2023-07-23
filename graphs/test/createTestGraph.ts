import Graph from '../modules/Graph';

/*
 B <- A -> F -> G
      |
      C
     | |
     D  E
*/

export default function createTestGraph() {
  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addVertex('G');
  graph.addVertex('H');

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('A', 'F');
  graph.addEdge('F', 'G');

  return graph;
}
