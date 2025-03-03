import type { IVehicle } from './IVehicle.js';

import { Car } from './Car.js';
import { VehicleFactory } from './VehicleFactory.js';

/** Car factory. */
export class CarFactory extends VehicleFactory {
  /** @inheritdoc */
  protected createVehicle(name: string, maxSpeed: number): IVehicle {
    return new Car(`[Car] ${name}`, maxSpeed, 10_000);
  }
}
