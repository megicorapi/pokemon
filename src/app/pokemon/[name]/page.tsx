import { fetchPokemonByName } from '@/lib/api/pokemon';
import { Pokemon } from '@/app/types/pokemon';
import PokemonDetailsCard from '@/components/DetailsCard';

interface PokemonDetailsPageProps {
  params: {
    name: string;
  };
}

export default async function PokemonDetailsPage({
  params,
}: PokemonDetailsPageProps) {
  const pokemon: Pokemon = await fetchPokemonByName(params.name);

  return (
    <div className='p-4'>
      <PokemonDetailsCard pokemon={pokemon} />
    </div>
  );
}
