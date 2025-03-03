import { Factory } from './Factory.js';

const factory = new Factory();

const product1 = factory.createProduct('Product 1', 0);
console.log(product1, '\n');

const product2 = factory.createProduct('Product 2', 100);
console.log(product2, '\n');

const product3 = factory.createProduct('Product 3', 200);
console.log(product3, '\n');
