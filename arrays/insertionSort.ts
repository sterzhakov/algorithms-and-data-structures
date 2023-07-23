export default function insertionSort(nums: number[]): number[]  {
  const nextNums: number[] = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const prevNum = nextNums[j - 1] ?? -Infinity
      const nextNum = nextNums[j] ?? +Infinity
      if (prevNum < nums[i] && nextNum >= nums[i]) {
        nextNums.splice(j, 0, nums[i])
        break
      }
    }
  }
  return nextNums;
}
