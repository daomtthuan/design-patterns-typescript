import colors from 'picocolors';

/** Calculator. */
export class Calculator {
  private static instance?: Calculator;

  /** @inheritdoc */
  private constructor() {
    console.log(colors.gray('Calculator instance created'));
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
    if (!Calculator.instance) {
      console.log(colors.gray('Calculator creating...'));
      Calculator.instance = new Calculator();
    }

    return Calculator.instance;
  }
}
