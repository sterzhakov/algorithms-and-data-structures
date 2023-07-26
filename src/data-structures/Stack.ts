export default class Stack<T> {
  store: T[] = []

  pop(): T | undefined {
    return this.store.pop()
  }

  push(value: T) {
    return this.store.push(value)
  }

  size() {
    return this.store.length;
  }
}
