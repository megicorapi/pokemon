import { fetchPokemonList, fetchPokemonByName } from '@/lib/api/pokemon';
import PokemonViewer from '@/components/PokemonViewer';

export default async function HomePage() {
  const list = await fetchPokemonList();
  const detailed = await Promise.all(
    list.results.map((p) => fetchPokemonByName(p.name))
  );

  return (
    <main className='relative min-h-screen'>
      <PokemonViewer allPokemons={detailed} />
    </main>
  );
}
