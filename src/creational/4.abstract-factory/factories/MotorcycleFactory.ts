import type { IElectricVehicle } from '../products/IElectricVehicle.js';
import type { IGasolineVehicle } from '../products/IGasolineVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { ElectricMotorcycle } from '../products/ElectricMotorcycle.js';
import { GasolineMotorcycle } from '../products/GasolineMotorcycle.js';

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
