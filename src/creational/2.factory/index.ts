import { ProductFactory } from './factories/ProductFactory.js';

const factory = new ProductFactory();

const product1 = factory.create('Product 1', 0);
console.log(product1);

console.log();

const product2 = factory.create('Product 2', 100);
console.log(product2);

console.log();

const product3 = factory.create('Product 3', 200);
console.log(product3);
