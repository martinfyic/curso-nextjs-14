'use client';

import { useState } from 'react';

import { useAppSelector } from '@/store';
import { PokemonFavoriteEmpty, PokemonGrid } from './';

export const PokemonFavorite = () => {
	const favoritesPokemons = useAppSelector(state =>
		Object.values(state.pokemons)
	);

	const [pokemons, setPokemons] = useState(favoritesPokemons);

	return (
		<>
			{pokemons.length ? (
				<PokemonGrid pokemons={pokemons} />
			) : (
				<PokemonFavoriteEmpty />
			)}
		</>
	);
};
