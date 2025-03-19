import type { PlayerCommand } from '../commands/abstracts/PlayerCommand.js';
import type { Player } from '../objects/Player.js';
import type { ICommander } from './abstracts/ICommander.js';

import { AttackCommand } from '../commands/AttackCommand.js';
import { MoveDownCommand } from '../commands/MoveDownCommand.js';
import { MoveLeftCommand } from '../commands/MoveLeftCommand.js';
import { MoveRightCommand } from '../commands/MoveRightCommand.js';
import { MoveUpCommand } from '../commands/MoveUpCommand.js';
import { ViewStaminaCommand } from '../commands/ViewStaminaCommand.js';

/** Player commander. */
export class PlayerCommander implements ICommander {
  /** Player commands. */
  private commands: Map<string, PlayerCommand>;

  /** @inheritdoc */
  public constructor(
    /** Player. */
    private player: Player,
  ) {
    this.commands = new Map([
      ['w', new MoveUpCommand(this.player)],
      ['a', new MoveLeftCommand(this.player)],
      ['s', new MoveDownCommand(this.player)],
      ['d', new MoveRightCommand(this.player)],
      ['return', new AttackCommand(this.player)],
      ['space', new ViewStaminaCommand(this.player)],
    ]);
  }

  /** @inheritdoc */
  public invoke(command: string): void {
    this.commands.get(command)?.execute();
  }
}
