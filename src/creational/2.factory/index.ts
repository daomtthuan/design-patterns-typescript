import { ProductFactory } from './ProductFactory.js';

const factory = new ProductFactory();

const product1 = factory.create('Product 1', 0);
console.log(product1, '\n');

const product2 = factory.create('Product 2', 100);
console.log(product2, '\n');

const product3 = factory.create('Product 3', 200);
console.log(product3, '\n');
