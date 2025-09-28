import { createInterface, type Interface } from "readline";
import { commandHelp } from "./commands/command_help.js";
import { commandExit } from "./commands/command_exit.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  PokeAPI: {
    prevLocationsURL: string;
    nextLocationsURL: string;
  };
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands: Record<string, CLICommand> = {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: (s) => commandHelp(s),
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: (s) => commandExit(s),
    },
  };

  const state: State = {
    rl,
    commands,
    PokeAPI: {
      prevLocationsURL: "",
      nextLocationsURL: "",
    },
  };

  return state;
}
