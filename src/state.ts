import { createInterface, type Interface } from "readline";
import { commandHelp } from "./commands/command_help.js";
import { commandExit } from "./commands/command_exit.js";
import { commandMap } from "./commands/command_map.js";
import { commandBMap } from "./commands/command_bmap.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  PokeAPI: {
    prevLocationsURL: string | null;
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
    map: {
      name: "map",
      description: "Shows next 20 location areas",
      callback: (s) => commandMap(s),
    },
    bmap: {
      name: "bmap",
      description: "Shows previous 20 location areas",
      callback: (s) => commandBMap(s),
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
