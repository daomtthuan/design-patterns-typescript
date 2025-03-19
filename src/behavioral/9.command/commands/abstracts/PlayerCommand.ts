import type { Player } from '../../objects/Player.js';
import type { ICommand } from './ICommand.js';

/** Player command. */
export abstract class PlayerCommand implements ICommand {
  /** @inheritdoc */
  public constructor(
    /** Player. */
    protected player: Player,
  ) {}

  /** @inheritdoc */
  public abstract execute(): void;
}
