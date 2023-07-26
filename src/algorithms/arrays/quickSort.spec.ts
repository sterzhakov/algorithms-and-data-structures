import quickSort from './quickSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('quickSort', () => {
  createCommonSortTestCases(quickSort)
})
