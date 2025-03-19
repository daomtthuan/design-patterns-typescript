import colors from 'picocolors';

import type { IElectricVehicle } from '../objects/abstracts/IElectricVehicle.js';
import type { IGasolineVehicle } from '../objects/abstracts/IGasolineVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { ElectricMotorcycle } from '../objects/ElectricMotorcycle.js';
import { GasolineMotorcycle } from '../objects/GasolineMotorcycle.js';

/** Motorcycle factory. */
export class MotorcycleFactory implements IVehicleFactory {
  /** @inheritdoc */
  public constructor() {
    console.log(colors.gray('MotorcycleFactory instance created'));
  }

  /** @inheritdoc */
  public createElectricVehicle(name: string): IElectricVehicle {
    return new ElectricMotorcycle(`[ElectricMotorcycle] ${name}`);
  }

  /** @inheritdoc */
  public createGasolineVehicle(name: string): IGasolineVehicle {
    return new GasolineMotorcycle(`[GasolineMotorcycle] ${name}`);
  }
}
