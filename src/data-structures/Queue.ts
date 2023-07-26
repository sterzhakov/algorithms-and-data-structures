export default class Queue<T> {
  queue: T[] = []

  pop() {
    return this.queue.shift()
  }

  push(value: T) {
    this.queue.push(value)
    return
  }

  size() {
    return this.queue.length;
  }
}
