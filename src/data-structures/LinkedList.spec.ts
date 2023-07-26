import { LinkedList } from './LinkedList'

describe('Data structures | Linked list', () => {
  it('empty values', () => {
    const linkedList = new LinkedList<number>()
    expect(linkedList.values()).toEqual([])
  })

  it('append', () => {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.values()).toEqual([1,2,3])
  })

  it('prepend', () => {
    const linkedList = new LinkedList<number>()
    linkedList.prepend(3)
    linkedList.prepend(2)
    linkedList.prepend(1)
    expect(linkedList.values()).toEqual([1,2,3])
  })

  it('find first node', () => {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    const node = linkedList.find((node) => node.value === 1)
    expect(node?.value).toEqual(1)
  })

  it('find middle node', () => {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    const node = linkedList.find((node) => node.value === 2)
    expect(node?.value).toEqual(2)
  })

  it('find last node', () => {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    const node = linkedList.find((node) => node.value === 3)
    expect(node?.value).toEqual(3)
  })

  it('insert', () => {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(3)
    linkedList.insertBefore((node) => node.value === 3, 2)
    expect(linkedList.values()).toEqual([1,2,3])
  })
})
