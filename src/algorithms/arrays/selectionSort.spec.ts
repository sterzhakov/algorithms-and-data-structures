import selectionSort from './selectionSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('selectionSort', () => {
  createCommonSortTestCases(selectionSort)
})
