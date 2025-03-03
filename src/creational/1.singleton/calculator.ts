// Eager Initialization Singleton

/** Calculator. */
export class Calculator {
  private static instance: Calculator = new Calculator();

  /** @inheritdoc */
  private constructor() {
    console.log('Calculator instance created');
  }

  /**
   * Calculate sum of two numbers.
   *
   * @param a Number 1.
   * @param b Number 2.
   *
   * @returns Sum of two numbers.
   */
  public sum(a: number, b: number): number {
    const result = a + b;
    console.log(`Sum: ${a} + ${b} = ${result}`);

    return result;
  }

  /** @returns Calculator instance. */
  public static getInstance(): Calculator {
    return Calculator.instance;
  }
}
