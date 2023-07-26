export interface Storage<T> {
  pop: () => T | undefined
  push: (value: T) => void
  size: () => number
}
