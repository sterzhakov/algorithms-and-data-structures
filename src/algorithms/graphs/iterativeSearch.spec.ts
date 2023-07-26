import createCommonTestGraphCases from './test/createCommonTestGraphCases';
import { iterativeDFS, iterativeBFS } from './iterativeSearch';

describe('graph search', () => {
  describe('iterative DFS', () => {
    createCommonTestGraphCases(iterativeDFS)
  })
  describe('iterative BFS', () => {
    createCommonTestGraphCases(iterativeBFS)
  })
})
