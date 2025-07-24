'use client';

import { useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';
import { fetchPokemonByName } from '@/lib/api/pokemon';
import HeroSection from '@/components/Hero';
import CardGrid from '@/components/CardGrid';

interface PokemonListResult {
  name: string;
  url: string;
}

interface PokemonViewerProps {
  pokemonList: PokemonListResult[];
}

export default function PokemonViewer({ pokemonList }: PokemonViewerProps) {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInitialDetails() {
      setLoading(true);

      const filteredList = pokemonList.filter((p) => {
        if (!searchText) return true;

        const nameMatch = p.name.toLowerCase().includes(searchText.toLowerCase());

        const idFromUrl = Number(p.url.split('/').filter(Boolean).pop());
        const idMatch = !isNaN(Number(searchText)) && idFromUrl === Number(searchText);

        return nameMatch || idMatch;
      });

      const details = await Promise.all(
        filteredList.map((p) => fetchPokemonByName(p.name))
      );

      setAllPokemons(details);
      setLoading(false);
    }

    fetchInitialDetails();
  }, [pokemonList, searchText]);

  const displayedPokemons = allPokemons;

  return (
    <>
      <HeroSection onSearch={setSearchText} />
      {loading ? (
        <p className='p-10 text-center text-gray-500'>Loading Pokémon...</p>
      ) : displayedPokemons.length > 0 ? (
        <CardGrid pokemons={displayedPokemons} />
      ) : (
        <p className='p-10 text-center text-gray-500'>No Pokémon found.</p>
      )}
    </>
  );
}
