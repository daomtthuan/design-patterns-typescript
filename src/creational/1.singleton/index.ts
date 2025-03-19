import { Calculator } from './objects/Calculator.js';
import { Store } from './objects/Store.js';

const result1 = Calculator.getInstance().sum(1, 2);
const result2 = Calculator.getInstance().sum(3, 4);

console.log();

Store.getInstance().add(result1);
Store.getInstance().add(result2);
