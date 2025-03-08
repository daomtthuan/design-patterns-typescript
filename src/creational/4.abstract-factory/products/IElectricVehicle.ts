import type { IVehicle } from './IVehicle.js';

/** Electric Vehicle interface. */
export interface IElectricVehicle extends IVehicle {
  /** Charge vehicle. */
  charge(): void;
}
