// Data structures
import swap from 'src/algorithms/arrays/helpers/swap';
import Heap from './Heap';

export default class MinHeap extends Heap {
  push(value: number) {
    this.heap.push(value)
    this.restoreTreeFromBottomToTop(this.size() - 1)
  }

  restoreTreeFromBottomToTop(index: number) {
    let nodeIndex: number | null = index
    while(nodeIndex !== null) {
      const rootValue = this.heap[nodeIndex]
      const parentIndex = this.parent(nodeIndex)
      const parentValue = this.heap[parentIndex]
      const isParentExists = typeof this.heap[parentIndex] !== undefined;
      if (isParentExists && parentValue > rootValue) {
        swap(nodeIndex, parentIndex, this.heap)
        nodeIndex = parentIndex
      } else {
        nodeIndex = null
      }
    }
  }

  pop() {
    if (this.size() === 1) {
      return this.heap.pop()
    } else {
      const tmp = this.heap[0]
      this.heap[0] = this.heap[this.size() - 1]
      this.heap.pop()
      this.restoreFromTopToBottom(0)
      return tmp
    }
  }

  restoreFromTopToBottom(index: number) {
    let rootIndex: number | null = index
    while(rootIndex !== null) {
      const nodeValue = this.heap[rootIndex]
      const leftChildIndex = this.leftChild(rootIndex)
      const leftChildValue = this.heap[leftChildIndex]
      const isLeftChildValueExists = leftChildValue !== undefined
      const rightChildIndex = this.rightChild(rootIndex)
      const rightChildValue = this.heap[rightChildIndex]
      const isRightChildValueExists = rightChildValue !== undefined

      let nextChildIndex: number | null;
      if (isLeftChildValueExists && isRightChildValueExists) {
        nextChildIndex =
          leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex
      } else if (isLeftChildValueExists && !isRightChildValueExists) {
        nextChildIndex = leftChildIndex
      } else {
        // !isLeftChildValueExists && !isRightChildValueExists
        nextChildIndex = null
      }

      if (nextChildIndex === null) break

      const nextChildValue = this.heap[nextChildIndex]

      if (nodeValue > nextChildValue) {
        swap(rootIndex, nextChildIndex, this.heap)
        rootIndex = nextChildIndex
      } else {
        rootIndex = null
      }
    }
  }
}
