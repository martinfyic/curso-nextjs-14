import { IoHeartCircleOutline } from 'react-icons/io5';

export const PokemonFavoriteEmpty = () => {
	return (
		<div className='flex - flex-col h-[50vh] items-center justify-center'>
			<IoHeartCircleOutline size={120} />
			<span className='text-2xl font-semibold '>No hay favoritos</span>
		</div>
	);
};
