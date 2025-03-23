import type { IIterator } from '../../iterators/abstracts/IIterator.js';

/**
 * Iterable Collection interface.
 *
 * @template T Item type.
 */
export interface IIterableCollection<T> {
  /**
   * Create iterator.
   *
   * @returns Iterator.
   */
  createIterator(): IIterator<T>;

  /**
   * Add item.
   *
   * @param item Item.
   *
   * @returns Collection.
   */
  add(item: T): this;
}
