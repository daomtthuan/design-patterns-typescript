import type { IElectricVehicle } from '../../objects/abstracts/IElectricVehicle.js';
import type { IGasolineVehicle } from '../../objects/abstracts/IGasolineVehicle.js';

/** Vehicle factory interface. */
export interface IVehicleFactory {
  /**
   * Create electric vehicle.
   *
   * @param name Vehicle name.
   *
   * @returns Electric vehicle.
   */
  createElectricVehicle(name: string): IElectricVehicle;

  /**
   * Create gasoline vehicle.
   *
   * @param name Vehicle name.
   *
   * @returns Gasoline vehicle.
   */
  createGasolineVehicle(name: string): IGasolineVehicle;
}
