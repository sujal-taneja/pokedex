import { PokeAPI } from "../pokeapi.js";
import { type State } from "../state.js";

export async function commandMap(state: State) {
  const pokeapi = new PokeAPI();

  const nextLocationsURL = state.PokeAPI.nextLocationsURL;

  try {
    const data = await pokeapi.fetchLocations(
      nextLocationsURL !== "" ? nextLocationsURL : undefined
    );

    state.PokeAPI.nextLocationsURL = data.next;
    state.PokeAPI.prevLocationsURL = data.previous;

    const result = data.results;
    result.forEach((element) => {
      console.log(element.name);
    });
  } catch {
    console.log("Could not fetch locations. Please try again.");
  }
}
