import type { IProduct } from './IProduct.js';

import { FreeProduct } from './FreeProduct.js';
import { PricedProduct } from './PricedProduct.js';

/** Factory. */
export class Factory {
  /**
   * Create product.
   *
   * @param name Product name.
   * @param price Product price.
   *
   * @returns Product.
   */
  public createProduct(name: string, price: number): IProduct {
    console.log('Create product with:', { name, price });

    if (price === 0) {
      return new FreeProduct(`[FREE] ${name}`, price);
    } else {
      const product = new PricedProduct(name, price);

      if (price > 100) {
        console.log('Apply discount');
        product.name = `[DISCOUNT] ${product.name}`;
        product.price = product.price * 0.9;
      }

      return product;
    }
  }
}
