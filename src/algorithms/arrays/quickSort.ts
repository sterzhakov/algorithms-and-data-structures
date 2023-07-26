export default function quickSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  let left: number[] = [];
  let right: number[] = [];
  const middleIndex = Math.floor((nums.length) / 2) - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === middleIndex) continue
    if (nums[i] < nums[middleIndex]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat(nums[middleIndex], quickSort(right));
}
