import type { User } from './User.js';

/** Request. */
export class Request {
  /** User. */
  public user?: User;

  /** @inheritdoc */
  public constructor(
    /** Request URL. */
    public url: string,

    /** Request headers. */
    public headers?: Record<string, string>,

    /** Request data. */
    public body?: string,
  ) {}
}
