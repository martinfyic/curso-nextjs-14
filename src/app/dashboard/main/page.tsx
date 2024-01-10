import { WidgetsGrid } from '@/components';

export const metadata = {
	title: 'Admin Dashboard',
	description: 'Admin Dashboard',
};

export default function MainPage() {
	return (
		<div className='text-black p-2 text-center'>
			<h1 className='mt-2 text-3xl mb-2 font-semibold text-blue-600'>
				Dashboard
			</h1>
			<span className='text-xl'>Información general</span>

			<WidgetsGrid />
		</div>
	);
}
