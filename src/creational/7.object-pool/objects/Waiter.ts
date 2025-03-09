import colors from 'picocolors';

/** Waiter. */
export class Waiter {
  /** @inheritdoc */
  public constructor(
    /** Waiter name. */
    public name: string,
  ) {
    console.log(colors.gray(`Waiter ${this.name} instance created`));
  }

  /**
   * Serve.
   *
   * @param time Working time.
   */
  public async serve(time: number): Promise<void> {
    console.log(colors.gray(`Waiter ${this.name} is serving in ${time}ms...`));

    await new Promise<void>((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
