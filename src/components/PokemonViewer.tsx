'use client';

import { useState } from 'react';
import { Pokemon } from '@/app/types/pokemon';
import HeroSection from '@/components/Hero';
import CardGrid from '@/components/CardGrid';

interface PokemonViewerProps {
  allPokemons: Pokemon[];
}

export default function PokemonViewer({ allPokemons }: PokemonViewerProps) {
  const [searchText, setSearchText] = useState('');
  

  const filteredPokemons = allPokemons.filter((pokemon) => {
    const query = searchText.toLowerCase().trim();
    if (!query) return true;

    const matchesName = pokemon.name.toLowerCase().includes(query);
    const matchesId = !isNaN(Number(query)) && pokemon.id === Number(query);
    return matchesName || matchesId;
  });

  const displayedPokemons = filteredPokemons;

  return (
    <>
      <HeroSection onSearch={setSearchText} />
      {displayedPokemons.length > 0 ? (
        <CardGrid pokemons={displayedPokemons} />
      ) : (
        <p className='p-10 text-center text-gray-500'>No Pokémon found.</p>
      )}
    </>
  );
}
