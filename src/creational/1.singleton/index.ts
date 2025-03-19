import { Calculator } from './objects/Calculator.js';
import { Store } from './objects/Store.js';

console.log();
const result1 = Calculator.getInstance().sum(1, 2);
Store.getInstance().add(result1);

console.log();
const result2 = Calculator.getInstance().sum(3, 4);
Store.getInstance().add(result2);

console.log();
Store.getInstance().print();
