import { IterableArray } from './collections/IterableArray.js';
import { IterableLinkedList } from './collections/IterableLinkedList.js';
import { Product } from './objects/Product.js';

const productList = new IterableLinkedList<Product>()
  .add(new Product('Product 1', 100))
  .add(new Product('Product 2', 200))
  .add(new Product('Product 3', 300))
  .add(new Product('Product 4', 400))
  .add(new Product('Product 5', 500));

const productIterator1 = productList.createIterator();
while (productIterator1.hasNext()) {
  console.log(productIterator1.next());
}

console.log();

// --------------------------

const productArray = new IterableArray<Product>()
  .add(new Product('Product 1', 100))
  .add(new Product('Product 2', 200))
  .add(new Product('Product 3', 300))
  .add(new Product('Product 4', 400))
  .add(new Product('Product 5', 500));

const productIterator2 = productArray.createIterator();
while (productIterator2.hasNext()) {
  console.log(productIterator2.next());
}
