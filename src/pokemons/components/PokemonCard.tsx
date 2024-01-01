import Link from 'next/link';
import Image from 'next/image';

import { SimplePokemon } from '..';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;

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
				<div className='border-b'>
					<Link
						href='/dashboard/main'
						className='px-4 py-2 hover:bg-gray-100 flex justify-end items-center'
					>
						<div className='pr-3'>
							<p className='text-sm font-medium text-gray-600 leading-none'>
								Favorito
							</p>
						</div>
						<div className='text-red-400'>
							<IoHeartOutline />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
