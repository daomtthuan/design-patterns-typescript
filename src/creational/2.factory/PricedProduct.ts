import colors from 'picocolors';

import type { IProduct } from './IProduct.js';

/** Priced product. */
export class PricedProduct implements IProduct {
  /**
   * @param name Product name.
   * @param price Product price.
   */
  public constructor(
    public name: string,
    public price: number,
  ) {
    console.log(colors.gray('PricedProduct instance created'));
  }
}
