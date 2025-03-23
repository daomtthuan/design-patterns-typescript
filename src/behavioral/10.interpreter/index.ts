import colors from 'picocolors';

import { Addition } from './expressions/Addition.js';
import { Constant } from './expressions/Constant.js';
import { Subtraction } from './expressions/Subtraction.js';
import { Variable } from './expressions/Variable.js';
import { ExpressionContext } from './object/ExpressionContext.js';

const operation = new Addition(
  new Constant(10),
  new Subtraction(new Variable('c'), new Addition(new Variable('a'), new Variable('b'), new Constant(1))),
  new Variable('d'),
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
        ['a', new Constant(1)],
        ['b', new Addition(new Constant(2), new Variable('d'))],
        ['c', new Constant(4)],
        ['d', new Constant(3)],
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
        ['a', new Constant(7)],
        ['b', new Variable('d')],
        ['c', new Constant(0)],
        ['d', new Constant(1)],
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
        ['a', new Constant(2)],
        ['b', new Constant(10)],
        ['c', new Constant(6)],
        ['d', new Constant(3)],
      ]),
    )}`,
  ].join('\n'),
);
