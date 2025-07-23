'use client';

import { useTeam } from '@/context/TeamContext';
import Card from '@/components/Card';

export default function TeamPage() {
  const { team } = useTeam();

  return (
    <div className='min-h-screen p-6'>
      <h1 className='mb-8 text-center text-4xl font-extrabold text-blue-600 drop-shadow-md'>
        Your Pokémon Team
      </h1>

      {team.length === 0 ? (
        <p className='text-center text-gray-600'>
          Your team is empty. Go catch some Pokémon!
        </p>
      ) : (
        <div className='grid grid-cols-1 justify-center justify-items-center gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {team.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}
