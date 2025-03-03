import colors from 'picocolors';

import type { IProduct } from './IProduct.js';

/** Free product. */
export class FreeProduct implements IProduct {
  /**
   * @param name Product name.
   * @param price Product price.
   */
  public constructor(
    public name: string,
    public price: number,
  ) {
    console.log(colors.gray('FreeProduct instance created'));
  }
}
