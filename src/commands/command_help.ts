import { type CLICommand } from "../command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Usage: \n");

  for (const command in commands) {
    if (!commands[command]) return;
    console.log(`${command}: ${commands[command].description}`);
  }
}
