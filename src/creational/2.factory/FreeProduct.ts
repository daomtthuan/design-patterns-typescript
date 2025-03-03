import colors from 'picocolors';

import type { IProduct } from './IProduct.js';

/** Free product. */
export class FreeProduct implements IProduct {
  /** @inheritdoc */
  public constructor(
    public name: string,
    public price: number,
  ) {
    console.log(colors.gray('FreeProduct instance created'));
  }
}
