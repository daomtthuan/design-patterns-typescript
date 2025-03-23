import type { IterableLinkedList } from '../collections/IterableLinkedList.js';
import type { IIterator } from './abstracts/IIterator.js';

/**
 * Linked list iterator.
 *
 * @template T Item type.
 */
export class LinkedListIterator<T> implements IIterator<T> {
  private current?: InstanceType<typeof IterableLinkedList.Node<T>>;

  /** @inheritdoc */
  public constructor(
    /** Collection. */
    private collection: IterableLinkedList<T>,
  ) {
    this.current = this.collection.first;
  }

  /** @inheritdoc */
  public next(): T {
    if (!this.hasNext()) {
      throw new Error('No more items');
    }

    const item = this.current!.value;
    this.current = this.current!.next;

    return item;
  }

  /** @inheritdoc */
  public hasNext(): boolean {
    return !!this.current;
  }

  /** @inheritdoc */
  public reset(): void {
    this.current = this.collection.first;
  }
}
