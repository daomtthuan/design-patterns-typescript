import type { IElectricVehicle } from '../products/IElectricVehicle.js';
import type { IGasolineVehicle } from '../products/IGasolineVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { ElectricCar } from '../products/ElectricCar.js';
import { GasolineCar } from '../products/GasolineCar.js';

/** Car factory. */
export class CarFactory implements IVehicleFactory {
  /** @inheritdoc */
  public createElectricVehicle(name: string): IElectricVehicle {
    return new ElectricCar(`[ElectricCar] ${name}`);
  }

  /** @inheritdoc */
  public createGasolineVehicle(name: string): IGasolineVehicle {
    return new GasolineCar(`[GasolineCar] ${name}`);
  }
}
