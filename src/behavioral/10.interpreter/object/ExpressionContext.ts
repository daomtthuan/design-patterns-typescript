import type { IExpression } from '../expressions/abstracts/IExpression.js';

/** Expression context. */
export class ExpressionContext {
  /** Variables. */
  public variables: Map<string, IExpression>;

  /** @inheritdoc */
  public constructor(
    /** Variables. */
    variables: [name: string, value: IExpression][],
  ) {
    this.variables = new Map(variables);
  }
}
