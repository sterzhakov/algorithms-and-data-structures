type HeapAsJson = { [key: number]: HeapAsJson | null }

export default class Heap {
  heap: number[] = []

  parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index: number) {
    return index * 2 + 1
  }

  rightChild(index: number) {
    return index * 2 + 2
  }

  size() {
    return this.heap.length
  }

  toArray() {
    return this.heap
  }

  toJson() {
    if (this.heap.length === 0) return {}

    const heapAsJson: HeapAsJson = {};
    let queue: { index: number, parent: HeapAsJson | null }[] =
      [{ index: 0, parent: heapAsJson }]

    while (queue.length > 0) {
      const node = queue.shift()!;
      const leftChild = this.leftChild(node.index);
      const rightChild = this.rightChild(node.index);
      node.parent![this.heap[node.index]] =
        this.heap[leftChild] || this.heap[leftChild] ? {} : null
      if (this.heap[leftChild])
        queue.push({ index: leftChild, parent: node.parent![node.index] })
      if (this.heap[rightChild])
        queue.push({ index: rightChild, parent: node.parent![node.index] })
    }

    return heapAsJson;
  }
}
