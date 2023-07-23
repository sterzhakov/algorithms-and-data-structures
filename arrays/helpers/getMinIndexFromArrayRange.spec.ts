import getMinIndexFromArrayRange from './getMinIndexFromArrayRange'

describe('getMinIndexFromArrayRange', () => {
  it('random', () => {
    expect(
      getMinIndexFromArrayRange(
        0,
        5,
        [-1,0,1,2,3]
      )
    ).toEqual(0)
  })

  it('with dup return first max index', () => {
    expect(
      getMinIndexFromArrayRange(
        0,
        7,
        [14, -23, 54, 0, 0, 23, 54]
      )
    ).toEqual(1)
  })
})
