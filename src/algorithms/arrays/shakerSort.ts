import swap from './helpers/swap';

export default function shakerSort(nums: number[]): number[]  {
  if (nums.length < 2) return nums;

  let left = 0;
  let right = nums.length;

  while(left < right) {
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[i + 1]) swap(i, i + 1, nums);
    }
    right--;
    for (let i = right; i > left; i--) {
      if (nums[i] < nums[i - 1]) swap(i, i - 1, nums);
    }
    left++;
  }

  return nums;
}
