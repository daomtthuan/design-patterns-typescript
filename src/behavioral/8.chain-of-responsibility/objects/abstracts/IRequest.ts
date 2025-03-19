/** Request interface. */
export interface IRequest {
  /** Request URL. */
  url: string;

  /** Request headers. */
  headers?: Record<string, string>;

  /** Request data. */
  body?: string;
}
