export default class Stack<T> {
  store: T[] = []

  get(): T | undefined {
    return this.store.pop()
  }

  set(value: T) {
    return this.store.push(value)
  }

  size() {
    return this.store.length;
  }
}
