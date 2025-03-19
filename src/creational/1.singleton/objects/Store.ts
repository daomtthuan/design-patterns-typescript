import colors from 'picocolors';

/** Store. */
export class Store {
  private static instance: Store = new Store();

  /** Store values. */
  private values: number[];

  /** @inheritdoc */
  private constructor() {
    this.values = [];

    console.log(colors.gray('Store instance created'));
  }

  /**
   * Add value to store.
   *
   * @param value Value to add.
   */
  public add(value: number): void {
    console.log('Add value:', value);
    this.values.push(value);
  }

  /** Print store values. */
  public print(): void {
    console.log('Store values:', this.values);
  }

  /** @returns Store instance. */
  public static getInstance(): Store {
    return Store.instance;
  }
}
