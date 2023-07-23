export default function getMaxIndexFromArrayRange(
  left: number,
  right: number,
  nums: number[]
): number {
  let maxIndex = left;
  for (let i = left; i < right; i++) {
    const currentMax = Math.max(nums[maxIndex], nums[i]);
    if (currentMax > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex
}
