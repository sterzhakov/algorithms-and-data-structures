import mergeList from './helpers/mergeList'

export default function mergeSort(nums: number[]): number[] {
  if (nums.length === 0) return []
  const queue: number[][] = nums.map((num) => [num]);
  while (queue.length > 1) {
    const leftNums = queue.shift()!
    const rightNums = queue.shift() || []
    queue.push(mergeList(leftNums, rightNums))
  }
  return queue[0]
}
