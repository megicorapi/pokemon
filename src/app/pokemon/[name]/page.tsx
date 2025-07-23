import {
  fetchPokemonByName,
  fetchPokemonSpeciesByNameOrId,
  fetchEvolutionChain,
} from '@/lib/api/pokemon';
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
  const speciesData = await fetchPokemonSpeciesByNameOrId(params.name);

  const evolutionChainUrl = speciesData.evolution_chain.url;
  const evolutionChainId = parseInt(
    evolutionChainUrl.split('/').filter(Boolean).pop() || '0'
  );

  const evolutionChain = await fetchEvolutionChain(evolutionChainId);

  return (
    <div className='p-4'>
      <PokemonDetailsCard pokemon={pokemon} evolutionChain={evolutionChain} />
    </div>
  );
}
