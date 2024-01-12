import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
	[key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsFavoriteState => {
	const favorites = JSON.parse(
		localStorage.getItem('favorit-pokemons') ?? '{}'
	);

	return favorites;
};

const initialState: PokemonsFavoriteState = {
	...getInitialState(),
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;

			if (!!state[id]) {
				delete state[id];
				return;
			} else {
				state[id] = pokemon;
			}

			//! ---
			// En redux no es buena practica llamar al localStorage dentro del reducer, deben ser funciones puras
			// localStorage.setItem('favorit-pokemons', JSON.stringify(state));
			//!--
		},
	},
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
