import colors from 'picocolors';

import type { IVehicle } from '../objects/abstracts/IVehicle.js';
import type { IVehicleFactory } from './abstracts/IVehicleFactory.js';

import { Car } from '../objects/Car.js';

/** Car factory. */
export class CarFactory implements IVehicleFactory {
  /** @inheritdoc */
  public constructor() {
    console.log(colors.gray('CarFactory instance created'));
  }

  /** @inheritdoc */
  public create(name: string, maxSpeed: number): IVehicle {
    return new Car(`[Car] ${name}`, maxSpeed, 10_000);
  }
}
