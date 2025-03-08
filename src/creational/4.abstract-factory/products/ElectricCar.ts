import colors from 'picocolors';

import type { IElectricVehicle } from './IElectricVehicle.js';

/** Electric Car. */
export class ElectricCar implements IElectricVehicle {
  /** @inheritdoc */
  public constructor(public name: string) {
    console.log(colors.gray('ElectricCar instance created'));
  }

  /** @inheritdoc */
  public charge(): void {
    console.log(colors.gray('ElectricCar charged'));
  }
}
