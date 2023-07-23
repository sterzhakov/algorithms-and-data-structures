import getMaxIndexFromArrayRange from './getMaxIndexFromArrayRange'

describe('getMaxIndexFromArrayRange', () => {
  it('random', () => {
    expect(
      getMaxIndexFromArrayRange(
        0,
        5,
        [-1,0,1,2,3]
      )
    ).toEqual(4)
  })

  it('with dup return first max index', () => {
    expect(
      getMaxIndexFromArrayRange(
        0,
        7,
        [14, -23, 54, 0, 0, 23, 54]
      )
    ).toEqual(2)
  })
})
