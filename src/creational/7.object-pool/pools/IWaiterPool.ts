import type { Waiter } from '../objects/Waiter.js';

/** Waiter pool interface. */
export interface IWaiterPool {
  /**
   * Acquire waiter from pool.
   *
   * @returns Waiter or null if not available waiters.
   */
  acquireWaiter(): Waiter | null;

  /**
   * Release waiter to pool.
   *
   * @param waiter Waiter to release.
   */
  releaseWaiter(waiter: Waiter): void;
}
