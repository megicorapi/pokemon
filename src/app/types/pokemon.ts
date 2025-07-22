export interface PokemonListResult {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListResult[];
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string | null;
      };
      showdown: {
        back_default: string | null;
      };
    };
  };
  base_experience: number;
  stats: {
    base_stat: number;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface EvolutionChain {
  id: number;
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: EvolutionChain['chain'][];
  };
}
