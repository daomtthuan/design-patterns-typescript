import colors from 'picocolors';

import type { IVehicle } from './IVehicle.js';

/** Car. */
export class Car implements IVehicle {
  /** @inheritdoc */
  public constructor(
    public name: string,
    public maxSpeed: number,
    public price: number,
  ) {
    console.log(colors.gray('Car instance created'));
  }
}
