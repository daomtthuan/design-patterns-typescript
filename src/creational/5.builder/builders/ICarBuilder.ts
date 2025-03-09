import type { Car } from '../products/Car.js';
import type { Engine } from '../products/Engine.js';

/** Car builder interface. */
export interface ICarBuilder {
  /**
   * Set car name.
   *
   * @param name Car name.
   */
  setName(name: string): ICarBuilder;

  /**
   * Set car engine.
   *
   * @param engine Car engine.
   */
  setEngine(engine: Engine): ICarBuilder;

  /**
   * Build the car.
   *
   * @returns Car.
   */
  build(): Car;
}
