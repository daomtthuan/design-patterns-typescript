import type { IIterator } from '../iterators/abstracts/IIterator.js';
import type { IIterableCollection } from './abstracts/IIterableCollection.js';

import { LinkedListIterator } from '../iterators/LinkedListIterator.js';

/**
 * Iterable Linked List.
 *
 * @template T Item type.
 */
export class IterableLinkedList<T> implements IIterableCollection<T> {
  /** First node. */
  public first?: InstanceType<typeof IterableLinkedList.Node<T>>;

  /** Last node. */
  public last?: InstanceType<typeof IterableLinkedList.Node<T>>;

  /** @inheritdoc */
  public createIterator(): IIterator<T> {
    return new LinkedListIterator(this);
  }

  /** @inheritdoc */
  public add(item: T): this {
    const node = new IterableLinkedList.Node(item);

    if (!this.first) {
      this.first = node;
    }

    this.last = this.last?.setNext(node) ?? node;

    return this;
  }

  /**
   * Node.
   *
   * @template T Item type.
   */
  public static Node = class Node<T> {
    /** @inheritdoc */
    public constructor(
      /** Value. */
      public value: T,

      /** Next node. */
      public next?: Node<T>,
    ) {}

    /** @inheritdoc */
    public setNext(node: Node<T>): Node<T> {
      this.next = node;

      return this.next;
    }
  };
}
