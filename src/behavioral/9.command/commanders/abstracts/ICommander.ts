/** Commander interface. */
export interface ICommander {
  /**
   * Invoke command.
   *
   * @param command Command.
   */
  invoke(command: string): void;
}
