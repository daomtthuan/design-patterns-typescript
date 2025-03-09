import type { Request } from '../objects/Request.js';

/** Base Request handler. */
export abstract class RequestHandler {
  /** Next handler. */
  public next?: RequestHandler;

  /**
   * Handle the request.
   *
   * @param request Request.
   */
  public abstract handle(request: Request): void;
}
