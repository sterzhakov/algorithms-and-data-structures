import heapSort from './heapSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('heapSort', () => {
  createCommonSortTestCases(heapSort)
})
