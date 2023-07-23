import swap from './swap'

describe('swap', () => {
  it('1 case', () => {
    expect(
      swap(3,4,[1,2,3,5,4])
    ).toEqual([1,2,3,4,5])
  })
})
