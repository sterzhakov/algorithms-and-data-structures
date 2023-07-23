import { iterativeBFS, iterativeDFS } from '../iterativeSearch';
import { recursiveDFS, recursiveBFS } from '../recursiveSearch';
import createTestGraph from './createTestGraph';

export default function createCommonTestGraphCases(
  search:
    typeof iterativeBFS |
    typeof iterativeDFS |
    typeof recursiveDFS |
    typeof recursiveBFS
) {

  const graph = createTestGraph();

  it('case A,B', () => {
    expect(
      search('A', 'B', graph)
    ).toEqual('A->B')
  })

  it('case A,E', () => {
    expect(
      search('A', 'E', graph)
    ).toEqual('A->C->E')
  })

  it('case A,G', () => {
    expect(
      search('A', 'G', graph)
    ).toEqual('A->F->G')
  })

  it('case C,D', () => {
    expect(
      search('C', 'D', graph)
    ).toEqual('C->D')
  })
}
