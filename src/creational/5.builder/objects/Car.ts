import colors from 'picocolors';

import type { Engine } from './Engine.js';

/** Car. */
export class Car {
  /** @inheritdoc */
  public constructor(
    /** Vehicle name. */
    private name: string,

    /** Engine. */
    private engine: Engine,
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
}
