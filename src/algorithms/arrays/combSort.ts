import swap from './helpers/swap';

function createGap(size: number): number {
  return Math.floor(size / 1.247);
}

export default function combSort(nums: number[]): number[]  {
  if (nums.length < 2) return nums;

  let isSwapped = true;
  let gap: number = nums.length;

  while(gap > 1 || isSwapped === true) {
    isSwapped = false
    for (let i = 0; i < (nums.length - gap); i++) {
      if (nums[i] > nums[i + gap]) {
        swap(i, i + gap, nums)
        isSwapped = true
      }
    }
    gap = createGap(gap)
  }

  return nums;
}
