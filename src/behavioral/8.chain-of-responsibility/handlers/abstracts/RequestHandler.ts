import type { IRequest } from '../../objects/abstracts/IRequest.js';
import type { IRequestHandler } from './IRequestHandler.js';

/** Base Request handler. */
export abstract class RequestHandler implements IRequestHandler {
  /** Next handler. */
  protected next?: IRequestHandler;

  /** @inheritdoc */
  public abstract handle(request: IRequest): void;

  /** @inheritdoc */
  public setNext(handler: IRequestHandler): IRequestHandler {
    this.next = handler;

    return this.next;
  }
}
