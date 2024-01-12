import type { Metadata } from 'next';

import { PokemonFavorite } from '@/pokemons';

// METADATA
export const metadata: Metadata = {
	title: 'Favoritos',
	description: 'Todos los Pokemons favoritos',
};

export default async function PokemonsPage() {
	return (
		<section className='flex flex-col'>
			<h1 className='text-center text-7xl mb-16 font-extrabold'>
				Pokemons Favoritos
			</h1>
			<span className='text-5xl text-center mb-16 font-semibold'>
				Listado{' '}
				<small className='font-normal text-yellow-500/80'>Global State</small>
			</span>

			<PokemonFavorite />
		</section>
	);
}
