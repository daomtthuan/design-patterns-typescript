import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** Move left command. */
export class MoveLeftCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    this.player.moveLeft();
  }
}
