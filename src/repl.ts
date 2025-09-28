import { createInterface } from "node:readline";
import { getCommands } from "./command.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

rl.on("line", (input: string) => {
  const inputArray = cleanInput(input);
  const givenCommand = inputArray[0];

  if (!givenCommand) {
    rl.prompt();
    return;
  }

  const commands = getCommands();

  const commandFound = commands[givenCommand];

  if (!commandFound) {
    console.log(
      `Unknown command: ${givenCommand}. Type "help" for a list of commands.\n`
    );
    rl.prompt();
    return;
  }

  commandFound.callback(commands);

  console.log();
  rl.prompt();
});

export function startREPL() {
  rl.prompt();
}

function cleanInput(input: string) {
  return input.split(" ").filter((e) => e !== "");
}
