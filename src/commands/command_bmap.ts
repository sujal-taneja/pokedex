import { PokeAPI } from "../pokeapi.js";
import { type State } from "../state.js";

export async function commandBMap(state: State) {
  try {
    const pokeapi = new PokeAPI();
    const prevLocationsURL = state.PokeAPI.prevLocationsURL;

    if (prevLocationsURL === "" || prevLocationsURL === null) {
      console.log("You're on the first page");
      return "CONTINUE";
    }

    const data = await pokeapi.fetchLocations(prevLocationsURL);

    state.PokeAPI.nextLocationsURL = data.next;
    state.PokeAPI.prevLocationsURL = data.previous;

    data.results.forEach((e) => {
      console.log(e.name);
    });
  } catch {
    console.log("Could not fetch locations. Please try again.");
  }
}
