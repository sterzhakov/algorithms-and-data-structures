export default function getMaxIndexFromArrayRange(
  left: number,
  right: number,
  nums: number[]
): number {
  let minIndex = left;
  for (let i = left; i < right; i++) {
    const currentMin = Math.min(nums[minIndex], nums[i]);
    if (currentMin < nums[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex
}
