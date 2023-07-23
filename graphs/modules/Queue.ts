export default class Queue<T> {
  store: T[] = []

  get() {
    return this.store.shift()
  }

  set(value: T) {
    return this.store.push(value)
  }

  size() {
    return this.store.length;
  }
}
