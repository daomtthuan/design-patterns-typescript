import type { ExpressionContext } from '../object/ExpressionContext.js';
import type { IExpression } from './abstracts/IExpression.js';

/** Variable expression. */
export class Variable implements IExpression {
  /** @inheritdoc */
  public constructor(
    /** Name. */
    private name: string,
  ) {}

  /** @inheritdoc */
  public interpret(context: ExpressionContext): number {
    const variable = context.variables.get(this.name);
    if (!variable) {
      throw new Error(`Variable '${this.name}' does not exist.`);
    }

    return variable.interpret(context);
  }
}
