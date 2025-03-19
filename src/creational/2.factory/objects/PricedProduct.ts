import colors from 'picocolors';

import type { IProduct } from './abstracts/IProduct.js';

/** Priced product. */
export class PricedProduct implements IProduct {
  /** @inheritdoc */
  public constructor(
    public name: string,
    public price: number,
  ) {
    console.log(colors.gray(`PricedProduct ${this.name} instance created`));
  }
}
