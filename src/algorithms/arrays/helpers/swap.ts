export default function swap(
  left: number,
  right: number,
  nums: number[]
): number[] {
  const temp = nums[left];
  nums[left] = nums[right]
  nums[right] = temp
  return nums;
}
