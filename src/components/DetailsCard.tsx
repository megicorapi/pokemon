'use client';
import { typeColors } from '@/constant/colors';
import { Pokemon, EvolutionChain } from '@/app/types/pokemon';
import Image from 'next/image';

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
  evolutionChain?: EvolutionChain;
}

export const PokemonDetailsCard = ({
  pokemon,
  evolutionChain,
}: PokemonDetailsCardProps) => {
  const primaryType = pokemon.types[0].type.name;
  const typeColor = typeColors[primaryType] || 'bg-gray-400';

  const getEvolutionNames = (chain: EvolutionChain['chain']): string[] => {
    const names: string[] = [];
    let current = chain;
    while (current) {
      names.push(current.species.name);
      current = current.evolves_to?.[0];
    }
    return names;
  };

  const evolutionNames = evolutionChain
    ? getEvolutionNames(evolutionChain.chain)
    : [];

  return (
    <div className='mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-white shadow-2xl'>
      <div className={`${typeColor} border-b bg-opacity-10 px-6 py-6 sm:px-8`}>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div>
            <h1 className='text-3xl font-bold capitalize text-gray-900 sm:text-4xl'>
              {pokemon.name}
            </h1>
            <div className='mt-1 flex flex-wrap gap-3 text-gray-600'>
              <span className='text-xl font-semibold sm:text-2xl'>
                #{pokemon.id}
              </span>
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`${
                    typeColors[type.type.name]
                  } rounded-full px-3 py-1 text-xs font-medium capitalize text-white sm:text-sm`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className='text-right'>
            <div className='text-xs text-gray-600 sm:text-sm'>
              Base Experience
            </div>
            <div className='text-xl font-bold text-gray-900 sm:text-2xl'>
              {pokemon.base_experience} XP
            </div>
          </div>
        </div>
      </div>

      <div className='p-6 sm:p-8'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex justify-center'>
            <div className='relative h-64 w-64 sm:h-80 sm:w-80'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner' />
              <Image
                src={
                  pokemon.sprites.other['official-artwork'].front_default || ''
                }
                alt={`${pokemon.name} front`}
                fill
                className='object-contain transition-transform duration-300 hover:scale-105'
                priority
              />
            </div>
          </div>

          <div className='space-y-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              <section>
                <h3 className='mb-3 text-lg font-bold text-gray-900 sm:text-xl'>
                  Base Stats
                </h3>
                <ul className='list-inside list-disc space-y-1 text-sm text-gray-800 sm:text-base'>
                  {pokemon.stats.map((stat, i) => (
                    <li key={i} className='capitalize'>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className='mb-3 text-lg font-bold text-gray-900 sm:text-xl'>
                  Evolution Chain
                </h3>
                {evolutionNames.length > 0 ? (
                  <ul className='list-inside list-disc space-y-1 text-sm text-gray-800 sm:text-base'>
                    {evolutionNames.map((name, i) => (
                      <li key={i} className='capitalize'>
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-sm text-gray-600 sm:text-base'>
                    No evolution chain available.
                  </p>
                )}
              </section>
            </div>

            <section>
              <h3 className='mb-3 text-lg font-bold text-gray-900 sm:text-xl'>
                Physical Attributes
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                {[
                  {
                    label: 'Height',
                    value: `${(pokemon.height / 10).toFixed(1)}m`,
                  },
                  {
                    label: 'Weight',
                    value: `${(pokemon.weight / 10).toFixed(1)}kg`,
                  },
                ].map((attr, i) => (
                  <div
                    key={i}
                    className='rounded-xl bg-gray-50 p-4 text-center'
                  >
                    <div className='text-xl font-bold text-gray-900 sm:text-2xl'>
                      {attr.value}
                    </div>
                    <div className='text-xs text-gray-600 sm:text-sm'>
                      {attr.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
