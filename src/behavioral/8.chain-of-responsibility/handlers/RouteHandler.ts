import colors from 'picocolors';

import type { Request } from '../objects/Request.js';

import { RequestHandler } from './RequestHandler.js';

/** Route handler. */
export class RouteHandler extends RequestHandler {
  /** Route map. */
  private routeMap: Map<string, new () => RequestHandler>;

  /** @param handlers Handlers. */
  public constructor(handlers: [url: string, handlerClass: new () => RequestHandler][]) {
    super();

    this.routeMap = new Map(handlers);
  }

  /** @inheritdoc */
  public handle(request: Request): void {
    console.log(`[RouteHandler] ${colors.gray('Handling...')}`);

    const Handler = this.routeMap.get(request.url);
    if (!Handler) {
      console.log('[RouteHandler]', colors.red('Route not found'), colors.gray(request.url));
      return;
    }

    console.log('[RouteHandler]', colors.green('Route found'), colors.gray(request.url));
    this.next = new Handler();
    this.next.handle(request);
  }
}
