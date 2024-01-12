'use client';

import Link from 'next/link';
import Image from 'next/image';

import { SimplePokemon } from '..';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice';

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;
	const isFavorite = useAppSelector(state => !!state.pokemons[id]);
	const dispatch = useAppDispatch();

	const handleToggle = () => {
		dispatch(toggleFavorite(pokemon));
	};

	return (
		<div className='mx-auto right-0 mt-2 w-60'>
			<div className='rounded overflow-hidden shadow-lg'>
				<div className='flex flex-col items-center justify-center p-6 bg-gray-800 border-b'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						alt={name}
						width={110}
						height={110}
						priority={false}
					/>
					<p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
						{name}
					</p>
					<div className='mt-5'>
						<Link
							href={`/dashboard/pokemons/${name}`}
							className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
						>
							Ver mas
						</Link>
					</div>
				</div>
				<div className='border-b flex flex-row justify-between items-center px-4'>
					<div className='pr-3'>
						<p className='text-sm font-medium text-gray-600 leading-none'>
							# {id.padStart(3, '0')}
						</p>
					</div>
					<button
						onClick={handleToggle}
						className='px-4 py-2 hover:bg-gray-100 flex justify-end items-center cursor-pointer'
					>
						<div className='text-red-600'>
							{isFavorite ? <IoHeart /> : <IoHeartOutline />}
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
