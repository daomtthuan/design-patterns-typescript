import type { ExpressionContext } from '../object/ExpressionContext.js';
import type { IExpression } from './abstracts/IExpression.js';

/** Addition expression. */
export class AdditionExpression implements IExpression {
  /** Operands. */
  private operands: IExpression[];

  /** @inheritdoc */
  public constructor(
    /** Operands. */
    ...operands: IExpression[]
  ) {
    this.operands = operands;
  }

  /** @inheritdoc */
  public interpret(context: ExpressionContext): number {
    return this.operands.reduce((acc, operand) => acc + operand.interpret(context), 0);
  }
}
