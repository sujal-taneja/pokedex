export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const response = await fetch(
      `${pageURL ? pageURL : PokeAPI.baseURL + "/location-area"}`
    );
    const data = await response.json();
    return data;
  }

  //   async fetchLocation(locationName: string): Promise<Location> {
  //     // implement this
  //   }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};
