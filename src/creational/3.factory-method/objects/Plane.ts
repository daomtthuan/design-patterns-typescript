import colors from 'picocolors';

import type { IVehicle } from './abstracts/IVehicle.js';

/** Plane. */
export class Plane implements IVehicle {
  /** @inheritdoc */
  public constructor(
    public name: string,
    public maxSpeed: number,
    public price: number,
  ) {
    console.log(colors.gray(`Plane ${this.name} instance created`));
  }
}
