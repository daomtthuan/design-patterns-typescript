import colors from 'picocolors';

import type { ICarBuilder } from './abstracts/ICarBuilder.js';

import { Car } from '../objects/Car.js';
import { Engine } from '../objects/Engine.js';

/** Car builder. */
export class CarBuilder implements ICarBuilder {
  private carName: string;
  private carEngine: Engine;

  /** @inheritdoc */
  public constructor() {
    this.carName = 'Unnamed Car';
    this.carEngine = new Engine();

    console.log(colors.gray('CarBuilder instance created'));
  }

  /**
   * Set car name.
   *
   * @param name Car name.
   *
   * @returns Car builder.
   */
  public setName(name: string): this {
    this.carName = name;

    console.log(colors.gray(`Set car name to ${this.carName}`));

    return this;
  }

  /**
   * Set car engine.
   *
   * @param engine Car engine.
   *
   * @returns Car builder.
   */
  public setEngine(engine: Engine): this {
    this.carEngine = engine;

    console.log(colors.gray(`Set car engine to`), this.carEngine);

    return this;
  }

  /** @inheritdoc */
  public build(): Car {
    return new Car(this.carName, this.carEngine);
  }
}
