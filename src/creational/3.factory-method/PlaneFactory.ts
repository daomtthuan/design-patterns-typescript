import type { IVehicle } from './IVehicle.js';

import { Plane } from './Plane.js';
import { VehicleFactory } from './VehicleFactory.js';

/** Plane factory. */
export class PlaneFactory extends VehicleFactory {
  /** @inheritdoc */
  protected createVehicle(name: string, maxSpeed: number): IVehicle {
    return new Plane(`[Plane] ${name}`, maxSpeed, 1_000_000_000);
  }
}
