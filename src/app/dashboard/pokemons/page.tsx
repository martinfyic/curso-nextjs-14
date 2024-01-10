import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import type { Metadata } from 'next';

// METADATA
export const metadata: Metadata = {
	title: 'Pokémons',
	description: 'Todos los Pokemons',
};

const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then(res => res.json());

	const pokemons = data.results.map(pokemon => ({
		// url = 'https://pokeapi.co/api/v2/pokemon/10/'
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}));

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151);
	return (
		<section className='flex flex-col'>
			<h1 className='text-center text-7xl mb-16 font-extrabold'>
				<span className='text-yellow-500'>P</span>okemons
			</h1>
			<span className='text-5xl text-center mb-16 font-semibold'>
				Listado <small className='font-light'>estático</small>
			</span>
			<PokemonGrid pokemons={pokemons} />
		</section>
	);
}
