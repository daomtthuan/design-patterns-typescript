import type { IExpression } from './abstracts/IExpression.js';

/** Constant expression. */
export class Constant implements IExpression {
  /** @inheritdoc */
  public constructor(
    /** Value. */
    private value: number,
  ) {}

  /** @inheritdoc */
  public interpret(): number {
    return this.value;
  }
}
