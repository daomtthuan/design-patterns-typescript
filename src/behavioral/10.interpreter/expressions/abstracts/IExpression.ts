import type { ExpressionContext } from '../../object/ExpressionContext.js';

/** Expression interface. */
export interface IExpression {
  /**
   * Interpret.
   *
   * @param context Context.
   *
   * @returns Result.
   */
  interpret(context: ExpressionContext): number;
}
