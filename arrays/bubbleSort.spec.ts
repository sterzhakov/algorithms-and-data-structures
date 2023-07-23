import bubbleSort from './bubbleSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('bubbleSort', () => {
  createCommonSortTestCases(bubbleSort)
})
