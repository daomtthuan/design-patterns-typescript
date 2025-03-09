import colors from 'picocolors';

import type { IElectricVehicle } from './IElectricVehicle.js';

/** Electric Motorcycle. */
export class ElectricMotorcycle implements IElectricVehicle {
  /** @inheritdoc */
  public constructor(public name: string) {
    console.log(colors.gray(`ElectricMotorcycle ${this.name} instance created`));
  }

  /** @inheritdoc */
  public charge(): void {
    console.log('ElectricMotorcycle charged');
  }
}
