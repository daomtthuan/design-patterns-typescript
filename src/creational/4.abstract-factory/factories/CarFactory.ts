import colors from 'picocolors';

import type { IElectricVehicle } from '../objects/abstracts/IElectricVehicle.js';
import type { IGasolineVehicle } from '../objects/abstracts/IGasolineVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { ElectricCar } from '../objects/ElectricCar.js';
import { GasolineCar } from '../objects/GasolineCar.js';

/** Car factory. */
export class CarFactory implements IVehicleFactory {
  /** @inheritdoc */
  public constructor() {
    console.log(colors.gray('CarFactory instance created'));
  }

  /** @inheritdoc */
  public createElectricVehicle(name: string): IElectricVehicle {
    return new ElectricCar(`[ElectricCar] ${name}`);
  }

  /** @inheritdoc */
  public createGasolineVehicle(name: string): IGasolineVehicle {
    return new GasolineCar(`[GasolineCar] ${name}`);
  }
}
