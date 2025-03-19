import colors from 'picocolors';
import * as readline from 'readline';

import { PlayerCommander } from './commanders/PlayerCommander.js';
import { Player } from './objects/Player.js';

const player = new Player('Player 1', 100);
const playerCommander = new PlayerCommander(player);

/** Print guide. */
function printGuide(): void {
  console.clear();
  console.log(
    `${colors.gray('Move:')} ${colors.green('W A S D')}`,
    `${colors.gray('Attack:')} ${colors.green('ENTER')}`,
    `${colors.gray('View stamina:')} ${colors.green('SPACE')}`,
  );
  console.log(`${colors.gray('Exit:')} ${colors.green('ESC')}`);

  console.log();
}

printGuide();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (_, { name, ctrl }) => {
  if (name === 'escape' || (ctrl && name === 'c')) {
    process.exit();
  }

  printGuide();
  playerCommander.invoke(name);
});
