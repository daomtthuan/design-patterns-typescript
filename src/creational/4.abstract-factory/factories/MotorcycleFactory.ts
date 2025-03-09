import type { IElectricVehicle } from '../objects/IElectricVehicle.js';
import type { IGasolineVehicle } from '../objects/IGasolineVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { ElectricMotorcycle } from '../objects/ElectricMotorcycle.js';
import { GasolineMotorcycle } from '../objects/GasolineMotorcycle.js';

/** Motorcycle factory. */
export class MotorcycleFactory implements IVehicleFactory {
  /** @inheritdoc */
  public createElectricVehicle(name: string): IElectricVehicle {
    return new ElectricMotorcycle(`[ElectricMotorcycle] ${name}`);
  }

  /** @inheritdoc */
  public createGasolineVehicle(name: string): IGasolineVehicle {
    return new GasolineMotorcycle(`[GasolineMotorcycle] ${name}`);
  }
}
