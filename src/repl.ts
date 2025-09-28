import type { State } from "./state.js";

export async function startREPL(state: State) {
  const rl = state.rl;

  rl.prompt();

  rl.on("line", async (input: string) => {
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

    try {
      await commandFound.callback(state);
    } catch (err) {
      console.error("Could not fetch. Please try again.");
    }

    console.log();
    rl.prompt();
  });
}

function cleanInput(input: string) {
  return input.split(" ").filter((e) => e !== "");
}
