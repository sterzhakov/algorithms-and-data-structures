import mergeList from './mergeList'

describe('mergeList', () => {
  it('1 case', () => {
    expect(
      mergeList(
        [1,2,3],
        [2,3,4,5,6]
      )
    ).toEqual([1,2,2,3,3,4,5,6])
  })

  it('2 case', () => {
    expect(
      mergeList(
        [2,3,4,5,6],
        [1,2,3]
      )
    ).toEqual([1,2,2,3,3,4,5,6])
  })
})
