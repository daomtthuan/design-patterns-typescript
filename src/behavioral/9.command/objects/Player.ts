import colors from 'picocolors';

/** Player. */
export class Player {
  private recoverInterval?: NodeJS.Timeout;

  /** @inheritdoc */
  public constructor(
    /** Player name. */
    public name: string,

    /** Stamina. */
    public stamina: number,
  ) {}

  /** Move up. */
  public moveUp(): void {
    console.log(colors.gray(`${this.name} moved up`));
  }

  /** Move down. */
  public moveDown(): void {
    console.log(colors.gray(`${this.name} moved down`));
  }

  /** Move left. */
  public moveLeft(): void {
    console.log(colors.gray(`${this.name} moved left`));
  }

  /** Move right. */
  public moveRight(): void {
    console.log(colors.gray(`${this.name} moved right`));
  }

  /** Attack. */
  public attack(): void {
    if (this.stamina < 10) {
      console.log(colors.red(`${this.name} is out of stamina`));
      return;
    }

    this.stamina -= 10;
    console.log(colors.gray(`${this.name} attacked`));

    this.startRecovery();
  }

  /** Start recovery. */
  private startRecovery(): void {
    if (this.recoverInterval) {
      clearInterval(this.recoverInterval);
    }

    this.recoverInterval = setInterval(() => {
      if (this.stamina >= 100) {
        clearInterval(this.recoverInterval);
        return;
      }

      this.stamina += 5;
    }, 1000);
  }
}
