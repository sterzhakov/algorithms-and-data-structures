import MinHeap from './MinHeap'

describe('Data structures | Min heap', () => {
  it('Empty heap to json', () => {
    const minHeap = new MinHeap()
    expect(
      minHeap.toJson()
    ).toEqual({})
  })

  it('Empty heap to value', () => {
    const minHeap = new MinHeap()
    expect(minHeap.heap).toEqual([])
  })

  it('Root node to json', () => {
    const minHeap = new MinHeap()
    minHeap.push(10)
    expect(
      minHeap.toJson()
    ).toEqual({ 10: null })
  })

  it('Heap as 6 node push in same sort order', () => {
    const minHeap = new MinHeap()
    minHeap.push(10)
    minHeap.push(20)
    minHeap.push(30)
    minHeap.push(40)
    minHeap.push(50)
    minHeap.push(60)
    expect(
      minHeap.heap
    ).toEqual([10, 20, 30, 40, 50, 60])
  })

  it('Heap as 6 node push in reverse sort order', () => {
    const minHeap = new MinHeap()
    minHeap.push(60)
    minHeap.push(50)
    minHeap.push(40)
    minHeap.push(30)
    minHeap.push(20)
    minHeap.push(10)
    expect(
      minHeap.heap
    ).toEqual([10,30,20,60,40,50])
  })

  it('pop one value 6 array items', () => {
    const minHeap = new MinHeap()
    minHeap.push(10)
    minHeap.push(20)
    minHeap.push(30)
    minHeap.push(40)
    minHeap.push(50)
    minHeap.push(60)
    expect(
      minHeap.pop()
    ).toEqual(10)
    expect(
      minHeap.heap
    ).toEqual([20, 40, 30, 60, 50])
  })

  it('pop one value 1 array items', () => {
    const minHeap = new MinHeap()
    minHeap.push(10)
    expect(
      minHeap.pop()
    ).toEqual(10)
    expect(
      minHeap.heap
    ).toEqual([])
  })


})
