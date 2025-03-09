import type { RequestHandler } from '../handlers/RequestHandler.js';
import type { Request } from '../objects/Request.js';

/** Request handlers chain. */
export class RequestHandlersChain {
  /** Handlers. */
  private handlers: RequestHandler[];

  /** @inheritdoc */
  public constructor() {
    this.handlers = [];
  }

  /**
   * Register handler.
   *
   * @param handler Handler.
   */
  public register(handler: RequestHandler): void {
    const lastHandler = this.handlers[this.handlers.length - 1];
    if (lastHandler) {
      lastHandler.next = handler;
    }

    this.handlers.push(handler);
  }

  /**
   * Handle the request.
   *
   * @param request Request.
   */
  public handle(request: Request): void {
    console.log('Handle request', request);

    this.handlers[0]?.handle(request);
  }
}
