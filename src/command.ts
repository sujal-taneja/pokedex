import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

const commands: Record<string, CLICommand> = {
  help: {
    name: "help",
    description: "Displays a help message",
    callback: commandHelp,
  },
  exit: {
    name: "exit",
    description: "Exit the Pokedex",
    callback: commandExit,
  },
};

export function getCommands() {
  return commands;
}
