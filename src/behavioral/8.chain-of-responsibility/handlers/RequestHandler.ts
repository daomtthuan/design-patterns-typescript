import type { Request } from '../objects/Request.js';

/** Base Request handler. */
export abstract class RequestHandler {
  /** Next handler. */
  protected next?: RequestHandler;

  /**
   * Handle the request.
   *
   * @param request Request.
   */
  public abstract handle(request: Request): void;

  /**
   * Set next handler.
   *
   * @param handler Next Handler.
   *
   * @returns Next Handler.
   */
  public setNext(handler: RequestHandler): RequestHandler {
    this.next = handler;

    return this.next;
  }
}
