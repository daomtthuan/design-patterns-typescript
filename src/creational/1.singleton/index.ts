import { Calculator } from './Calculator.js';
import { Store } from './Storage.js';

const result1 = Calculator.getInstance().sum(1, 2);
const result2 = Calculator.getInstance().sum(3, 4);

Store.getInstance().add(result1);
Store.getInstance().add(result2);
