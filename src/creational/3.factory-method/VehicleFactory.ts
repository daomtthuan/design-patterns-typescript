import colors from 'picocolors';

import type { IVehicle } from './IVehicle.js';

/** Vehicle factory. */
export abstract class VehicleFactory {
  /**
   * Create vehicle.
   *
   * @param name Vehicle name.
   * @param maxSpeed Vehicle max speed.
   *
   * @returns Vehicle.
   */
  public create(name: string, maxSpeed: number): IVehicle {
    const vehicle = this.createVehicle(name, maxSpeed);
    this.checkVehicle(vehicle);

    return vehicle;
  }

  /**
   * Create vehicle.
   *
   * @param name Vehicle name.
   * @param maxSpeed Vehicle max speed.
   *
   * @returns Vehicle.
   */
  protected abstract createVehicle(name: string, maxSpeed: number): IVehicle;

  /**
   * Check vehicle.
   *
   * @param vehicle Vehicle.
   */
  private checkVehicle(vehicle: IVehicle): void {
    if (vehicle.maxSpeed < 100) {
      console.log(colors.red(`Vehicle ${vehicle.name} is too slow`));
      vehicle.price = 0;
    } else {
      console.log(colors.green(`Vehicle ${vehicle.name} is working well`));
    }
  }
}
