export class Node<T> {
  value: T
  prev?: Node<T>
  next?: Node<T>

  constructor(value: T) {
    this.value = value
  }
}

type IsThatNode<T> = (node: Node<T>) => boolean

export class LinkedList<T> {
  head: Node<T> | undefined
  tail: Node<T> | undefined
  length: number = 0

  private createFirstNode(node: Node<T>) {
    this.head = node
    this.tail = node
    this.sizeIncrement()
  }

  append(value: T) {
    const node = new Node(value)
    if (this.size() === 0) {
      this.createFirstNode(node)
    } else {
      node.prev = this.tail
      this.tail!.next = node
      this.tail = node
      this.sizeIncrement()
    }
    return this
  }

  prepend(value: T) {
    const node = new Node(value)
    if (this.size() == 0) {
      this.createFirstNode(node)
    } else {
      node.next = this.head
      this.head!.prev = node
      this.head = node
      this.sizeIncrement()
    }
    return this
  }

  insertBefore(isNodeBefore: IsThatNode<T>, value: T) {
    const nodeBefore = this.find(isNodeBefore);
    if (!nodeBefore) return false;
    const newNode = new Node(value)
    newNode.next = nodeBefore
    this.sizeIncrement()
    if (newNode === this.head) {
      nodeBefore.prev = newNode
      this.head = newNode
    } else {
      nodeBefore.prev!.next = newNode
      nodeBefore.prev = newNode
    }
    return true;
  }

  find(isThatNode: IsThatNode<T>) {
    let thatNode: Node<T> | undefined = undefined;
    let node: Node<T> | undefined = this.head
    while (node) {
      if (isThatNode(node)) {
        thatNode = node;
        break;
      }
      node = node.next
    }
    return thatNode;
  }

  values() {
    const values: T[] = [];
    let node: Node<T> | undefined = this.head
    while (node) {
      values.push(node?.value)
      node = node.next
    }
    return values
  }

  size() {
    return this.length;
  }

  private sizeIncrement() {
    this.length++
  }
}
