import type { State } from "../state.js";

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!\n");
  process.exit(0);
}
