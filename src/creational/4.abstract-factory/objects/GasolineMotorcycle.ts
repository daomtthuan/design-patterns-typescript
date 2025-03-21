import colors from 'picocolors';

import type { IGasolineVehicle } from './abstracts/IGasolineVehicle.js';

/** Gasoline Motorcycle. */
export class GasolineMotorcycle implements IGasolineVehicle {
  /** @inheritdoc */
  public constructor(public name: string) {
    console.log(colors.gray(`GasolineMotorcycle ${this.name} instance created`));
  }

  /** @inheritdoc */
  public refuel(): void {
    console.log('GasolineMotorcycle refueled');
  }
}
