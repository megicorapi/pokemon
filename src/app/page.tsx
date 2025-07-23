import { fetchPokemonList } from '@/lib/api/pokemon';
import PokemonViewer from '@/components/PokemonViewer';

export default async function HomePage() {
  const list = await fetchPokemonList();

  return (
    <main className='relative min-h-screen'>
      <PokemonViewer pokemonList={list.results} />
    </main>
  );
}
