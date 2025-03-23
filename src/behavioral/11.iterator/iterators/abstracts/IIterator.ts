/**
 * Iterator interface.
 *
 * @template T Item type.
 */
export interface IIterator<T> {
  /**
   * Get next item.
   *
   * @returns Next item.
   */
  next(): T;

  /**
   * Check if there is next item.
   *
   * @returns True if there is next item.
   */
  hasNext(): boolean;

  /** Reset iterator. */
  reset(): void;
}
