import colors from 'picocolors';

import type { Request } from '../objects/Request.js';

import { RequestHandler } from './RequestHandler.js';

/** Route handler. */
export class RouteHandler extends RequestHandler {
  /** @inheritdoc */
  public constructor(
    /** Route map. */
    private routeMap: Map<string, new () => RequestHandler>,
  ) {
    super();
  }

  /** @inheritdoc */
  public handle(request: Request): void {
    console.log(`[RouteHandler] ${colors.gray('Handling...')}`);

    const key = `${request.method} ${request.url}`;
    const Handler = this.routeMap.get(key);
    if (!Handler) {
      console.log('[RouteHandler]', colors.red('Route not found'), colors.gray(key));
      return;
    }

    console.log('[RouteHandler]', colors.green('Route found'), colors.gray(key));
    this.next = new Handler();
    this.next.handle(request);
  }
}
