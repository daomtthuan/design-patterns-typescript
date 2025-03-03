// Lazy Initialization Singleton

import colors from 'picocolors';

/** Store. */
export class Store {
  private static instance: Store;

  private values: number[] = [];

  /** @inheritdoc */
  private constructor() {
    console.log(colors.gray('Store instance created'));
  }

  /**
   * Add value to store.
   *
   * @param value Value to add.
   */
  public add(value: number): void {
    console.log('Add value:', value, '\n');
    this.values.push(value);
  }

  /** @returns Store instance. */
  public static getInstance(): Store {
    if (!Store.instance) {
      console.log(colors.gray('Store creating...'));
      Store.instance = new Store();
    }

    return Store.instance;
  }
}
