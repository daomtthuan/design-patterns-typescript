import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** Attack command. */
export class AttackCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    this.player.attack();
  }
}
