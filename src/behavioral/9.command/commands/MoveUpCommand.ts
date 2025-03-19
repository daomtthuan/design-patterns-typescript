import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** Move up command. */
export class MoveUpCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    this.player.moveUp();
  }
}
