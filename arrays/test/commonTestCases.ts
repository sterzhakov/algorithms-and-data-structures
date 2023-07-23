const IS_DEBUG_ENABLED = false;

function debug(...args: any[]) {
  if (IS_DEBUG_ENABLED) {
    console.log(...args);
  }
}

export function createCommonSortTestCases(
  sort: (nums: number[]) => number[]
) {
  it('empty array', () => {
    const result = sort([])
    debug(result)
    expect(result).toEqual([])
  })

  it('sorted array', () => {
    const result = sort([-3,-2,-1,0,1,2,3])
    debug(result)
    expect(result).toEqual([-3,-2,-1,0,1,2,3])
  })

  it('reversed array', () => {
    const result = sort([3,2,1,0,-1,-2,-3])
    debug(result)
    expect(result).toEqual([-3,-2,-1,0,1,2,3])
  })

  it('random array', () => {
    const result = sort([-3,-1,1,3,2,0,-2])
    debug(result)
    expect(result).toEqual([-3,-2,-1,0,1,2,3])
  })

  it('random array with duplicates', () => {
    const result = sort([-3,-1,3,1,3,2,0,-2,-1])
    debug(result)
    expect(result).toEqual([-3,-2,-1,-1,0,1,2,3,3])
  })
}
