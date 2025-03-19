import type { IRequestHandler } from '../handlers/abstracts/IRequestHandler.js';
import type { IRequest } from '../objects/abstracts/IRequest.js';

/** Request handlers chain. */
export class RequestHandlersChain {
  /** First Handler. */
  private firstHandler?: IRequestHandler;

  /** Last Handler. */
  private lastHandler?: IRequestHandler;

  /**
   * Register handler.
   *
   * @param handler Handler.
   *
   * @returns Chain.
   */
  public register(handler: IRequestHandler): this {
    if (!this.firstHandler) {
      this.firstHandler = handler;
    }

    this.lastHandler = this.lastHandler?.setNext(handler) ?? handler;

    return this;
  }

  /**
   * Handle the request.
   *
   * @param request Request.
   */
  public handle(request: IRequest): void {
    console.log('Handle request', request);

    this.firstHandler?.handle(request);
  }
}
