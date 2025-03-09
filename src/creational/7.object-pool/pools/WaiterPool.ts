import colors from 'picocolors';

import type { IWaiterPool } from './IWaiterPool.js';

import { Waiter } from '../objects/Waiter.js';

/** Waiter pool. */
export class WaiterPool implements IWaiterPool {
  /** Available waiters. */
  private availableWaiters: Waiter[];

  /** @param numberOfWaiters Number of waiters. */
  public constructor(numberOfWaiters: number) {
    this.availableWaiters = [];
    for (let i = 0; i < numberOfWaiters; i++) {
      this.availableWaiters.push(new Waiter(`Waiter ${i + 1}`));
    }

    console.log(colors.gray('WaiterPool instance created'));
  }

  /** @inheritdoc */
  public acquireWaiter(): Waiter | null {
    const waiter = this.availableWaiters.pop();
    if (waiter) {
      return waiter;
    }

    return null;
  }

  /** @inheritdoc */
  public releaseWaiter(waiter: Waiter): void {
    this.availableWaiters.push(waiter);
  }
}
