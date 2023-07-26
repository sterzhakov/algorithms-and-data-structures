import MinHeap from 'src/data-structures/MinHeap';

export default function heapSort(nums: number[]): number[] {
  const minHeap = new MinHeap()
  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i])
  }

  let nextNums: number[] = []
  for (let i = 0; i < nums.length; i++) {
    nextNums.push(minHeap.pop()!)
  }

  return nextNums;
}
