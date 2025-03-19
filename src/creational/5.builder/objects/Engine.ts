import colors from 'picocolors';

/** Engine. */
export class Engine {
  /** @inheritdoc */
  public constructor(
    /** Engine power. */
    public power: number = 0,

    /** Engine max speed. */
    public maxSpeed: number = 0,
  ) {
    console.log(colors.gray('Engine instance created'));
  }
}
