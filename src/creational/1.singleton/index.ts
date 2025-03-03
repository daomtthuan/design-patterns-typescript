import { Calculator } from './calculator.js';
import { Store } from './storage.js';

const result1 = Calculator.getInstance().sum(1, 2);
Store.getInstance().add(result1);

const result2 = Calculator.getInstance().sum(3, 4);
Store.getInstance().add(result2);

const result3 = Calculator.getInstance().sum(5, 6);
Store.getInstance().add(result3);
