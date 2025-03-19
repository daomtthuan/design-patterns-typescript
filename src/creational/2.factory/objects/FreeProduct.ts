import colors from 'picocolors';

import type { IProduct } from './abstracts/IProduct.js';

/** Free product. */
export class FreeProduct implements IProduct {
  public price: number;

  /** @inheritdoc */
  public constructor(public name: string) {
    this.price = 0;

    console.log(colors.gray(`FreeProduct ${this.name} instance created`));
  }
}
