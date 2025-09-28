import type { State } from "./state.js";

export function startREPL(state: State) {
  const rl = state.rl;

  rl.prompt();

  rl.on("line", (input: string) => {
    const inputArray = cleanInput(input);
    const givenCommand = inputArray[0];

    if (!givenCommand) {
      rl.prompt();
      return;
    }

    const commands = state.commands;

    const commandFound = commands[givenCommand];

    if (!commandFound) {
      console.log(
        `Unknown command: ${givenCommand}. Type "help" for a list of commands.\n`
      );
      rl.prompt();
      return;
    }

    commandFound.callback(state);

    console.log();
    rl.prompt();
  });
}

function cleanInput(input: string) {
  return input.split(" ").filter((e) => e !== "");
}
