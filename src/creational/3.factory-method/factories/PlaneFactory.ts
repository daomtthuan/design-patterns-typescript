import colors from 'picocolors';

import type { IVehicle } from '../objects/IVehicle.js';
import type { IVehicleFactory } from './IVehicleFactory.js';

import { Plane } from '../objects/Plane.js';

/** Plane factory. */
export class PlaneFactory implements IVehicleFactory {
  /** @inheritdoc */
  public constructor() {
    console.log(colors.gray('PlaneFactory instance created'));
  }

  /** @inheritdoc */
  public create(name: string, maxSpeed: number): IVehicle {
    return new Plane(`[Plane] ${name}`, maxSpeed, 1_000_000_000);
  }
}
