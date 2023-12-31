// https://nextjs.org/docs/app/building-your-application/routing/error-handling

'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='flex flex-col w-full h-screen items-center justify-center gap-10'>
			<div className='flex flex-col'>
				<div className='flex flex-col items-center justify-center'>
					<p className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8'>
						500
					</p>
					<p className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2'>
						Server Error
					</p>
					<p className='md:text-lg xl:text-xl text-gray-500 mt-4'>
						Whoops, something went wrong on our servers.
					</p>
				</div>
			</div>
			<button
				className='px-4 py-2 bg-slate-950 text-white rounded-xl hover:bg-slate-700 hover:scale-105 transition-all ease-in-out'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
