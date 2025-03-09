/** User. */
export class User {
  /** @inheritdoc */
  public constructor(
    /** User username. */
    public username: string,

    /** User password. */
    public password: string,

    /** User full name. */
    public fullName: string,

    /** User email. */
    public email: string,
  ) {}

  /** @returns User info. */
  public get info(): string {
    return `${this.fullName} <${this.email}>`;
  }
}
