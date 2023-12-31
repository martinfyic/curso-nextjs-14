'use client';

import { FC, useState } from 'react';

interface Props {
	value?: number;
}

export const CartCounter: FC<Props> = ({ value = 0 }) => {
	const [counter, setCounter] = useState(value);

	const addOne = () => {
		setCounter(prev => prev + 1);
	};

	const removeOne = () => {
		setCounter(prev => prev - 1);
	};

	return (
		<>
			<span className='text-9xl'>{counter}</span>
			<div className='flex'>
				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={removeOne}
					disabled={counter <= 0}
				>
					-1
				</button>

				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={addOne}
				>
					+1
				</button>
			</div>
		</>
	);
};
