import colors from 'picocolors';

import type { Request } from '../objects/Request.js';
import type { User } from '../objects/User.js';

import { RequestHandler } from './abstracts/RequestHandler.js';

/** Auth handler. */
export class AuthHandler extends RequestHandler {
  /** @inheritdoc */
  public constructor(
    /** List of Users. */
    private users: User[],
  ) {
    super();
  }

  /** @inheritdoc */
  public handle(request: Request): void {
    console.log(`[AuthHandler] ${colors.gray('Handling...')}`);

    const user = this.users.find((user) => user.username === request.headers?.username && user.password === request.headers.password);
    if (!user) {
      console.log('[AuthHandler]', colors.red('Unauthorized'));
      return;
    }

    console.log('[AuthHandler]', colors.green('Authorized'));
    request.user = user;

    this.next?.handle(request);
  }
}
