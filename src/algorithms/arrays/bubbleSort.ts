import swap from './helpers/swap';

export default function bubbleSort(nums: number[]): number[]  {
  let swapCount = 0;
  for(let i = 0; i < nums.length; i++) {
    swapCount = 0
    for (let j = 0; j < (nums.length - i - 1); j++) {
      if (nums[j] > nums[j + 1]) {
        swapCount++
        swap(j, j+1, nums)
      };
    }
    if (swapCount === 0) break;
  }
  return nums
}
