import colors from 'picocolors';

import type { Waiter } from './objects/Waiter.js';

import { WaiterPool } from './pools/WaiterPool.js';

const pool = new WaiterPool(2);

/**
 * Try to acquire waiter.\
 * If there are no waiters available, wait 100ms and try again.
 *
 * @param name Action name.
 *
 * @returns Waiter.
 */
async function tryToAcquireWaiter(name: string): Promise<Waiter> {
  while (true) {
    console.log(`[${name}]`, colors.gray(`Trying to acquire waiter...`));
    const waiter = pool.acquireWaiter();
    if (waiter) {
      console.log(`[${name}]`, colors.gray('Acquired waiter:'), waiter);
      return waiter;
    }

    console.log(`[${name}]`, colors.red(`There are no waiters available. Waiting 1000ms...`));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

/**
 * Do something.
 *
 * @param name Action name.
 * @param time Working time.
 */
async function doSomething(name: string, time: number): Promise<void> {
  console.log();
  console.log(`[${name}]`, colors.blue(`Started`), colors.gray(`Working time: ${time}ms`));

  const waiter = await tryToAcquireWaiter(name);
  await waiter.serve(time);

  console.log();
  console.log(`[${name}]`, colors.gray('Released waiter:'), waiter);
  pool.releaseWaiter(waiter);

  console.log(`[${name}]`, colors.green(`Finished`));
}

await Promise.all([
  // Long tasks...
  doSomething('Task 1', 3000),
  doSomething('Task 2', 2000),
  doSomething('Task 3', 1000),
]);
