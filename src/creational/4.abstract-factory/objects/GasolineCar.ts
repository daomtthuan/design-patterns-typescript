import colors from 'picocolors';

import type { IGasolineVehicle } from './abstracts/IGasolineVehicle.js';

/** Gasoline Car. */
export class GasolineCar implements IGasolineVehicle {
  /** @inheritdoc */
  public constructor(public name: string) {
    console.log(colors.gray(`GasolineCar ${this.name} instance created`));
  }

  /** @inheritdoc */
  public refuel(): void {
    console.log('GasolineCar refueled');
  }
}
