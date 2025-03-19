import colors from 'picocolors';

import { PlayerCommand } from './abstracts/PlayerCommand.js';

/** View stamina command. */
export class ViewStaminaCommand extends PlayerCommand {
  /** @inheritdoc */
  public execute(): void {
    let stamina;
    if (this.player.stamina >= 50) {
      stamina = colors.green(this.player.stamina);
    } else if (this.player.stamina >= 20) {
      stamina = colors.yellow(this.player.stamina);
    } else {
      stamina = colors.red(this.player.stamina);
    }

    console.log(colors.gray(`${this.player.name} stamina: ${stamina}`));
  }
}
