import type { ExpressionContext } from '../object/ExpressionContext.js';
import type { IExpression } from './abstracts/IExpression.js';

/** Subtraction expression. */
export class SubtractionExpression implements IExpression {
  /** @inheritdoc */
  public constructor(
    /** Left expression. */
    private left: IExpression,

    /** Right expression. */
    private right: IExpression,
  ) {}

  /** @inheritdoc */
  public interpret(context: ExpressionContext): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
