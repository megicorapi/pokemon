import {
  EvolutionChain,
  Pokemon,
  PokemonListResponse,
} from '@/app/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok)
    throw new Error(
      "Oops! The Poké Ball slipped and couldn't fetch the Pokémon list. Give it another shot!"
    );
  return res.json();
}

export async function fetchPokemonByName(
  nameOrId: string | number
): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok)
    throw new Error(
      "Yikes! The Poké Ball missed. Can't find that Pokémon right now! Try again!"
    );
  return res.json();
}

export async function fetchEvolutionChain(id: number): Promise<EvolutionChain> {
  const res = await fetch(`${BASE_URL}/evolution-chain/${id}`);
  if (!res.ok)
    throw new Error(
      "Uh-oh! The Poké Ball got tangled and couldn't fetch the evolution chain. Let's try once more!"
    );
  return res.json();
}

export async function fetchPokemonSpeciesByNameOrId(nameOrId: string | number) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok)
    throw new Error("Oops! Couldn't fetch the Pokémon species data.");
  return res.json();
}
