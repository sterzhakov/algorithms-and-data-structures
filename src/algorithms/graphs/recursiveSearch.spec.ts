import createCommonTestGraphCases from './test/createCommonTestGraphCases';
import { recursiveDFS, recursiveBFS } from './recursiveSearch';

describe('graph search', () => {
  describe('recursive DFS', () => {
    createCommonTestGraphCases(recursiveDFS)
  })
  describe('recursive BFS', () => {
    createCommonTestGraphCases(recursiveBFS)
  })
})
