import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
			<div className='flex'>
				<div className='flex flex-col justify-center items-center w-full h-screen'>
					<h2 className='text-7xl text-gray-900 font-extrabold my-6 p-8'>
						404 | Pokemon Not Found
					</h2>
					<p className='text-3xl text-gray-700 mb-6 p-6'>
						Could not find the Pokemon
					</p>
					<Link
						className='px-6 py-3 bg-blue-900 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all ease-in-out duration-300'
						href='/dashboard/pokemons'
					>
						Volver a Pokemons
					</Link>
				</div>
			</div>
		</div>
	);
}
