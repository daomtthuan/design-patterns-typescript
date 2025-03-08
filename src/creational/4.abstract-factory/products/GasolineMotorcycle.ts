import colors from 'picocolors';

import type { IGasolineVehicle } from './IGasolineVehicle.js';

/** Gasoline Motorcycle. */
export class GasolineMotorcycle implements IGasolineVehicle {
  /** @inheritdoc */
  public constructor(public name: string) {
    console.log(colors.gray('GasolineMotorcycle instance created'));
  }

  /** @inheritdoc */
  public refuel(): void {
    console.log(colors.gray('GasolineMotorcycle refueled'));
  }
}
