'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import {
	addOne,
	initCounterState,
	removeOne,
} from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface Props {
	value?: number;
}

export interface CounterResponse {
	method: string;
	url: string;
	count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
	const URL = '/api/counter';
	const data = await fetch(URL).then(res => res.json());
	return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
	const count = useAppSelector(state => state.counter.count);
	const dispatch = useAppDispatch();

	// utilizando redux toolkit
	// useEffect(() => {
	// 	dispatch(initCounterState(value));
	// }, [dispatch, value]);

	// haciendo una llamada get para inicializar el contador
	useEffect(() => {
		getApiCounter().then(data => dispatch(initCounterState(data.count)));
	}, [dispatch]);

	return (
		<>
			<span className='text-9xl'>{count}</span>
			<div className='flex'>
				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={() => dispatch(removeOne())}
					disabled={count <= 0}
				>
					-1
				</button>

				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={() => dispatch(addOne())}
				>
					+1
				</button>
			</div>
		</>
	);
};
