import type { IVehicle } from '../objects/IVehicle.js';

/** Vehicle factory interface. */
export interface IVehicleFactory {
  /**
   * Create vehicle.
   *
   * @param name Vehicle name.
   * @param maxSpeed Vehicle max speed.
   *
   * @returns Vehicle.
   */
  create(name: string, maxSpeed: number): IVehicle;
}
