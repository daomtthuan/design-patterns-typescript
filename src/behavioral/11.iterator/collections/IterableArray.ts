import type { IIterator } from '../iterators/abstracts/IIterator.js';
import type { IIterableCollection } from './abstracts/IIterableCollection.js';

import { ArrayIterator } from '../iterators/ArrayIterator.js';

/** Iterable Array. */
export class IterableArray<T> extends Array<T> implements IIterableCollection<T> {
  /** @inheritdoc */
  public createIterator(): IIterator<T> {
    return new ArrayIterator(this);
  }

  /** @inheritdoc */
  public add(item: T): this {
    this.push(item);

    return this;
  }
}
