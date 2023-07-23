import getMaxIndexFromArrayRange from './helpers/getMaxIndexFromArrayRange'

export default function selectionSort(argNums: number[]): number[]  {
  const nums: number[] = [...argNums]
  for (let i = 0; i < nums.length; i++) {
    const maxIndex = getMaxIndexFromArrayRange(i, nums.length, nums)
    const num = nums[maxIndex]
    nums.splice(maxIndex, 1)
    nums.unshift(num)
  }
  return nums
}
