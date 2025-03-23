import type { IterableArray } from '../collections/IterableArray.js';
import type { IIterator } from './abstracts/IIterator.js';

/** Array iterator. */
export class ArrayIterator<T> implements IIterator<T> {
  /** Current index. */
  private currentIndex: number;

  /** @inheritdoc */
  public constructor(
    /** Collection. */
    private collection: IterableArray<T>,
  ) {
    this.currentIndex = 0;
  }

  /** @inheritdoc */
  public next(): T {
    if (!this.hasNext()) {
      throw new Error('No more items');
    }

    const item = this.collection[this.currentIndex]!;
    this.currentIndex++;

    return item;
  }

  /** @inheritdoc */
  public hasNext(): boolean {
    return this.currentIndex < this.collection.length;
  }

  /** @inheritdoc */
  public reset(): void {
    this.currentIndex = 0;
  }
}
