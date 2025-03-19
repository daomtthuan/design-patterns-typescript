import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** Move right command. */
export class MoveRightCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    this.player.moveRight();
  }
}
