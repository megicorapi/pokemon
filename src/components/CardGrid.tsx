'use client';

import Card from '@/components/Card';
import { Pokemon } from '@/app/types/pokemon';

interface CardGridProps {
  pokemons: Pokemon[];
}

const CardGrid = ({ pokemons }: CardGridProps) => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 justify-center gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
