import mergeSort from './mergeSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('mergeSort', () => {
  createCommonSortTestCases(mergeSort)
})
