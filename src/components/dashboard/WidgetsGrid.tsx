'use client';

import { IoCartOutline } from 'react-icons/io5';

import { SimpleWidget } from './';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
	const inCart = useAppSelector(state => state.counter.count);

	return (
		<div className='flex flex-wrap p-2 justify-center items-center mt-10'>
			<SimpleWidget
				title={inCart.toString()}
				subTitle='Productos Agregados'
				label='Carrito de compras'
				icon={
					<IoCartOutline
						size={70}
						className='text-blue-600'
					/>
				}
				href='/dashboard/counter'
			/>
		</div>
	);
};
