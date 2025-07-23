'use client';

import { useTeam } from '@/app/context/TeamContext';
import { Pokemon } from '@/app/types/pokemon';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface CardProps {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: CardProps) => {
  const router = useRouter();
  const { id, name, sprites, types } = pokemon;
  const image =
    sprites.other['official-artwork'].front_default || '/images/hero.jpg';
  const type = types[0]?.type.name || 'Unknown';

  const { isInTeam, addToTeam, removeFromTeam } = useTeam();
  const added = isInTeam(id);

  const toggleTeam = () => {
    added ? removeFromTeam(id) : addToTeam(pokemon);
  };

  const handleViewDetails = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <div className='group relative max-w-sm transform overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-orange-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

      <div className='relative h-52 overflow-hidden'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute left-4 top-4 z-20'>
          <span className='inline-flex items-center rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-medium text-yellow-900 backdrop-blur-sm'>
            {type}
          </span>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='mb-4 text-xl font-bold tracking-tight text-gray-900'>
          {name}
        </h3>
        <div className='mb-6 text-sm text-gray-600'>
          <div className='font-semibold text-gray-900'>#{id}</div>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={toggleTeam}
            className={`flex-1 transform rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
              added
                ? 'bg-green-500 text-white  hover:bg-green-600'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/25 hover:from-yellow-500 hover:to-orange-600 hover:shadow-yellow-500/40'
            }`}
          >
            {added ? '✓ Added' : '+ Add to Team'}
          </button>

          <button
            onClick={handleViewDetails}
            className='transform rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-95'
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
