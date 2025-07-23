'use client';
import { typeColors } from '@/constant/colors';
import { Pokemon } from '@/app/types/pokemon';
import Image from 'next/image';

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

export const PokemonDetailsCard = ({ pokemon }: PokemonDetailsCardProps) => {
  const primaryType = pokemon.types[0].type.name;
  const typeColor = typeColors[primaryType] || 'bg-gray-400';

  return (
    <div className='mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl'>
      <div
        className={`${typeColor} border-b border-gray-100 bg-opacity-10 px-8 py-6`}
      >
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='mb-2 text-4xl font-bold capitalize text-gray-900'>
              {pokemon.name}
            </h1>
            <div className='flex items-center gap-4'>
              <span className='text-2xl font-semibold text-gray-600'>
                #{pokemon.id}
              </span>
              <div className='flex gap-2'>
                {pokemon.types.map((type, index) => (
                  <span
                    key={index}
                    className={`${
                      typeColors[type.type.name]
                    } rounded-full px-4 py-1 text-sm font-medium capitalize text-white`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='text-right'>
            <div className='mb-1 text-sm text-gray-600'>Base Experience</div>
            <div className='text-2xl font-bold text-gray-900'>
              {pokemon.base_experience} XP
            </div>
          </div>
        </div>
      </div>

      <div className='p-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <div className='flex flex-col items-center'>
            <div className='relative mb-6 h-80 w-80'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner'></div>
              <div className='relative flex h-full w-full items-center justify-center'>
                <Image
                  src={
                    pokemon.sprites.other['official-artwork'].front_default ||
                    ''
                  }
                  alt={`${pokemon.name} front`}
                  width={300}
                  height={300}
                  className='object-contain transition-all duration-300 hover:scale-105'
                />
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <div>
              <h3 className='mb-4 text-xl font-bold text-gray-900'>
                Physical Attributes
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                <div className='rounded-xl bg-gray-50 p-4 text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {(pokemon.height / 10).toFixed(1)}m
                  </div>
                  <div className='text-sm text-gray-600'>Height</div>
                </div>
                <div className='rounded-xl bg-gray-50 p-4 text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {(pokemon.weight / 10).toFixed(1)}kg
                  </div>
                  <div className='text-sm text-gray-600'>Weight</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='mb-4 text-xl font-bold text-gray-900'>
                Base Stats
              </h3>
              <ul className='list-inside list-disc space-y-1 text-gray-800'>
                {pokemon.stats.map((stat, index) => (
                  <li key={index} className='capitalize'>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
