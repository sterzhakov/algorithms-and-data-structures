export default function mergeList(
  leftNums: number[],
  rightNums: number[]
): number[] {
  let leftCur = 0, rightCur = 0
  let nextNums: number[] = []

  while(
    leftCur < leftNums.length &&
    rightCur < rightNums.length
  ) {
    if (leftNums[leftCur] < rightNums[rightCur]) {
      nextNums.push(leftNums[leftCur])
      leftCur++
    } else {
      nextNums.push(rightNums[rightCur])
      rightCur++
    }
  }

  if (leftCur < leftNums.length) {
    nextNums.push(...leftNums.slice(leftCur))
  }

  if (rightCur < rightNums.length) {
    nextNums.push(...rightNums.slice(rightCur))
  }

  return nextNums
}
