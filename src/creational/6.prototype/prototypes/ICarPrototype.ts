/** Car prototype interface. */
export interface ICarPrototype {
  /**
   * Clone the car.
   *
   * @returns Car.
   */
  clone(): ICarPrototype;
}
