import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
	favorite: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsFavoriteState => {
// 	// if (typeof localStorage === 'undefined') return {};

// 	const favorites = JSON.parse(
// 		localStorage.getItem('favorit-pokemons') ?? '{}'
// 	);

// 	return favorites;
// };

const initialState: PokemonsFavoriteState = {
	favorite: {},
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;

			if (!!state.favorite[id]) {
				delete state.favorite[id];
				return;
			} else {
				state.favorite[id] = pokemon;
			}

			// En redux no es buena practica llamar al localStorage dentro del reducer, deben ser funciones puras
			localStorage.setItem('favorit-pokemons', JSON.stringify(state.favorite));
		},

		setFavoritPokemon(
			state,
			action: PayloadAction<{ [key: string]: SimplePokemon }>
		) {
			state.favorite = action.payload;
		},
	},
});

export const { setFavoritPokemon, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
