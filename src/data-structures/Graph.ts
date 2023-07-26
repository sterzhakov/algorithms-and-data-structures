// Local types

export type VertexKey = string;
export type VertexMap = { [key: VertexKey]: VertexKey[] };

// Local errors

function throwErrorHasNoVertex(vertexKey: VertexKey) {
  throw new Error(`Graph has no vertex ${vertexKey}`);
}

function throwErrorVertexAlreadyIncludeOther(
  vertexLeft: VertexKey,
  vertexRight: VertexKey
) {
  throw new Error(
    `vertex ${vertexLeft} already include vertex ${vertexRight}`
  );
}

// Main

export default class Graph {
  // Private

  private vertexMap: VertexMap = {};

  // Public

  addVertex(vertexKey: VertexKey) {
    if (!this.vertexMap[vertexKey]) {
      this.vertexMap[vertexKey] = [];
    }
  }

  addEdge(vertexLeft: VertexKey, vertexRight: VertexKey) {
    if (!this.isVertexExist(vertexLeft)) throwErrorHasNoVertex(vertexLeft);
    if (!this.isVertexExist(vertexRight)) throwErrorHasNoVertex(vertexRight);
    if (this.isVertexIncludeOther(vertexLeft, vertexRight))
      throwErrorVertexAlreadyIncludeOther(vertexLeft, vertexRight);
    if (this.isVertexIncludeOther(vertexRight, vertexLeft))
      throwErrorVertexAlreadyIncludeOther(vertexRight, vertexLeft);
    this.createEdge(vertexLeft, vertexRight);
  }

  createEdge(vertexLeft: VertexKey, vertexRight: VertexKey) {
    this.vertexMap[vertexLeft].push(vertexRight);
    this.vertexMap[vertexRight].push(vertexLeft);
  }

  getVertexMap(): VertexMap {
    return this.vertexMap;
  }

  getSiblings(vertexKey: VertexKey) {
    return this.vertexMap[vertexKey];
  }

  // Chekers

  isVertexExist(vertexKey: VertexKey) {
    return vertexKey in this.getVertexMap();
  }

  isVertexIncludeOther(vertexLeft: VertexKey, vertexRight: VertexKey) {
    return this.getVertexMap()[vertexLeft].includes(vertexRight);
  }
}
