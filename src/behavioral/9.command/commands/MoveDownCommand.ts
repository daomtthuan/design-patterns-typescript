import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** Move down command. */
export class MoveDownCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    this.player.moveDown();
  }
}
