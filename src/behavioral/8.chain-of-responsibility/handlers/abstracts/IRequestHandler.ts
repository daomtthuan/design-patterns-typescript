import type { IRequest } from '../../objects/abstracts/IRequest.js';

/** Request handler interface. */
export interface IRequestHandler {
  /**
   * Handle the request.
   *
   * @param request Request.
   */
  handle(request: IRequest): void;

  /**
   * Set next handler.
   *
   * @param handler Next Handler.
   *
   * @returns Next Handler.
   */
  setNext(handler: IRequestHandler): IRequestHandler;
}
