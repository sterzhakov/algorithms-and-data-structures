import shakerSort from './shakerSort'
import { createCommonSortTestCases } from './test/commonTestCases'

describe('shakerSort', () => {
  createCommonSortTestCases(shakerSort)
})
