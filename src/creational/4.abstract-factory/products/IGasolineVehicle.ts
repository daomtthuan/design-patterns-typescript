import type { IVehicle } from './IVehicle.js';

/** Gasoline Vehicle interface. */
export interface IGasolineVehicle extends IVehicle {
  /** Refuel vehicle. */
  refuel(): void;
}
