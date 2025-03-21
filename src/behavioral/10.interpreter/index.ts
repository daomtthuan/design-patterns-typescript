import colors from 'picocolors';

import { AdditionExpression } from './expressions/AdditionExpression.js';
import { ConstantExpression } from './expressions/ConstantExpression.js';
import { SubtractionExpression } from './expressions/SubtractionExpression.js';
import { VariableExpression } from './expressions/VariableExpression.js';
import { ExpressionContext } from './object/ExpressionContext.js';

const operation = new AdditionExpression(
  new ConstantExpression(10),
  new SubtractionExpression(
    new VariableExpression('c'),
    new AdditionExpression(new VariableExpression('a'), new VariableExpression('b'), new ConstantExpression(1)),
  ),
  new VariableExpression('d'),
);

console.log(
  [
    'Calculate expression:',
    `${colors.green('10 + (c - (a + b + 1)) + d')} ${colors.gray('= ?')}`,
    '',
    colors.gray('With context:'),
    '  a = 1',
    '  b = 2 + d',
    '  c = 4',
    '  d = 3',
    `${colors.gray('Result:')} ${operation.interpret(
      new ExpressionContext([
        ['a', new ConstantExpression(1)],
        ['b', new AdditionExpression(new ConstantExpression(2), new VariableExpression('d'))],
        ['c', new ConstantExpression(4)],
        ['d', new ConstantExpression(3)],
      ]),
    )}`,
    '',
    colors.gray('With context:'),
    '  a = 7',
    '  b = d',
    '  c = 0',
    '  d = 1',
    `${colors.gray('Result:')} ${operation.interpret(
      new ExpressionContext([
        ['a', new ConstantExpression(7)],
        ['b', new VariableExpression('d')],
        ['c', new ConstantExpression(0)],
        ['d', new ConstantExpression(1)],
      ]),
    )}`,
    '',
    colors.gray('With context:'),
    '  a = 2',
    '  b = 10',
    '  c = 6',
    '  d = 3',
    `${colors.gray('Result:')} ${operation.interpret(
      new ExpressionContext([
        ['a', new ConstantExpression(2)],
        ['b', new ConstantExpression(10)],
        ['c', new ConstantExpression(6)],
        ['d', new ConstantExpression(3)],
      ]),
    )}`,
  ].join('\n'),
);
