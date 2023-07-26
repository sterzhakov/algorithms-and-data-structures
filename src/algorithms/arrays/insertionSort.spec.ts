import insertionSort from './insertionSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('insertionSort', () => {
  createCommonSortTestCases(insertionSort)
})
