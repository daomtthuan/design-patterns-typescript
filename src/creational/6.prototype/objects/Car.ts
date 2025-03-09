import colors from 'picocolors';

import type { ICarPrototype } from '../prototypes/ICarPrototype.js';

import { Engine } from './Engine.js';

/** Car. */
export class Car implements ICarPrototype {
  /** @inheritdoc */
  public constructor(
    /** Vehicle name. */
    public name: string,

    /** Engine. */
    public engine: Engine,
  ) {
    console.log(colors.gray(`Car ${this.name} instance created`));
  }

  /** Run the car. */
  public run(): void {
    if (this.engine.power === 0) {
      console.log(`Car ${this.name} is not running!`);
    } else {
      console.log(`Car ${this.name} is running at max speed ${this.engine.maxSpeed}!`);
    }
  }

  /** @inheritdoc */
  public clone(): Car {
    const car = new Car(this.name, new Engine(this.engine.power, this.engine.maxSpeed));

    console.log(colors.gray('Car cloned'), car);

    return car;
  }
}
