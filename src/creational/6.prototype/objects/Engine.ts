import colors from 'picocolors';

/** Engine. */
export class Engine {
  /** @inheritdoc */
  public constructor(
    /** Engine power. */
    public power: number,

    /** Engine max speed. */
    public maxSpeed: number,
  ) {
    console.log(colors.gray('Engine instance created'));
  }
}
