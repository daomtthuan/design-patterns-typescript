import type { Car } from '../../objects/Car.js';

/** Car builder interface. */
export interface ICarBuilder {
  /**
   * Build the car.
   *
   * @returns Car.
   */
  build(): Car;
}
