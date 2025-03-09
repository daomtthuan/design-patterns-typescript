import type { IVehicle } from '../objects/IVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { Car } from '../objects/Car.js';

/** Car factory. */
export class CarFactory implements IVehicleFactory {
  /** @inheritdoc */
  public create(name: string, maxSpeed: number): IVehicle {
    return new Car(`[Car] ${name}`, maxSpeed, 10_000);
  }
}
