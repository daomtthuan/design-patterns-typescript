import colors from 'picocolors';

import type { ICarBuilder } from './ICarBuilder.js';

import { Car } from '../objects/Car.js';
import { Engine } from '../objects/Engine.js';

/** Car builder. */
export class CarBuilder implements ICarBuilder {
  private carName: string;
  private carEngine: Engine;

  /** @inheritdoc */
  public constructor() {
    this.carName = 'Unnamed Car';
    this.carEngine = new Engine(0, 0);
  }

  /** @inheritdoc */
  public setName(name: string): this {
    this.carName = name;

    console.log(colors.gray('Car name set'));

    return this;
  }

  /** @inheritdoc */
  public setEngine(): this {
    this.carEngine = new Engine(100, 300);

    console.log(colors.gray('Car engine set'));

    return this;
  }

  /** @inheritdoc */
  public build(): Car {
    return new Car(this.carName, this.carEngine);
  }
}
