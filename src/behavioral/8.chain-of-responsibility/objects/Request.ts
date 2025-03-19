import type { IRequest } from './abstracts/IRequest.js';
import type { User } from './User.js';

/** Request. */
export class Request implements IRequest {
  /** User. */
  public user?: User;

  /** @inheritdoc */
  public constructor(
    public url: string,
    public headers?: Record<string, string>,
    public body?: string,
  ) {}
}
