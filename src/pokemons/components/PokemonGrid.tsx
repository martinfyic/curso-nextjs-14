import { PokemonCard, SimplePokemon } from '../';

interface Props {
	pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
	return (
		<article className='flex flex-wrap gap-10 items-center justify-center'>
			{pokemons.map(pokemon => (
				<PokemonCard
					key={pokemon.id}
					pokemon={pokemon}
				/>
			))}
		</article>
	);
};
