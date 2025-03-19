import type { RequestHandler } from '../handlers/RequestHandler.js';
import type { Request } from '../objects/Request.js';

/** Request handlers chain. */
export class RequestHandlersChain {
  /** First Handler. */
  private firstHandler?: RequestHandler;

  /** Last Handler. */
  private lastHandler?: RequestHandler;

  /**
   * Register handler.
   *
   * @param handler Handler.
   *
   * @returns Chain.
   */
  public register(handler: RequestHandler): this {
    if (!this.lastHandler) {
      this.firstHandler = handler;
      this.lastHandler = handler;
    } else {
      this.lastHandler.next = handler;
      this.lastHandler = handler;
    }

    return this;
  }

  /**
   * Handle the request.
   *
   * @param request Request.
   */
  public handle(request: Request): void {
    console.log('Handle request', request);

    this.firstHandler?.handle(request);
  }
}
