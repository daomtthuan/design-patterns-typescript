import colors from 'picocolors';

import type { Request } from '../objects/Request.js';

import { RequestHandler } from './abstracts/RequestHandler.js';

/** User info handler. */
export class UserInfoHandler extends RequestHandler {
  /** @inheritdoc */
  public handle(request: Request): void {
    console.log(`[UserInfoHandler] ${colors.gray('Handling...')}`);

    console.log('[UserInfoHandler]', colors.green('User info:'), request.user?.info);
  }
}
