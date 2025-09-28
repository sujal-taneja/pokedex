import type { State } from "../state.js";

export function commandHelp(state: State) {
  console.log("Usage: \n");

  const commands = state.commands;

  for (const command in commands) {
    if (!commands[command]) return;
    console.log(`${command}: ${commands[command].description}`);
  }
}
