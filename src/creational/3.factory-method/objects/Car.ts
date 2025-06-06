import colors from 'picocolors';

import type { IVehicle } from './abstracts/IVehicle.js';

/** Car. */
export class Car implements IVehicle {
  /** @inheritdoc */
  public constructor(
    public name: string,
    public maxSpeed: number,
    public price: number,
  ) {
    console.log(colors.gray(`Car ${this.name} instance created`));
  }
}
