import Image from 'next/image';

import {
	IoCalculator,
	IoLogoReact,
	IoBrowsersOutline,
	IoFootball,
} from 'react-icons/io5';

import { SidebarMenuItems } from './SidebarMenuItems';

const menuItems = [
	{
		path: '/dashboard/main',
		icon: <IoBrowsersOutline size={35} />,
		title: 'Dashboard',
		subTitle: 'Vizualizacion',
	},
	{
		path: '/dashboard/counter',
		icon: <IoCalculator size={35} />,
		title: 'Counter',
		subTitle: 'Contador Client Side',
	},
	{
		path: '/dashboard/pokemons',
		icon: <IoFootball size={35} />,
		title: 'Pokemons',
		subTitle: 'Generacion estatica',
	},
];

export const Sidebar = () => {
	return (
		<div
			style={{ width: '350px' }}
			id='menu'
			className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'
		>
			<div
				id='logo'
				className='my-4 px-6'
			>
				<h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
					<IoLogoReact className='mr-2' />
					Dash<span className='text-blue-500'>8</span>.
				</h1>
				<p className='text-slate-500 text-sm'>
					Manage your actions and activities
				</p>
			</div>
			<div
				id='profile'
				className='px-6 py-10'
			>
				<p className='text-slate-500'>Welcome back,</p>
				<a
					href='#'
					className='inline-flex space-x-2 items-center'
				>
					<span>
						<Image
							className='rounded-full w-8 h-8'
							src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
							alt='user avatar'
							width={50}
							height={50}
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>
						Martin Ferreira
					</span>
				</a>
			</div>
			<nav
				id='nav'
				className='w-full px-6'
			>
				{menuItems.map(({ icon, path, subTitle, title }, idx) => (
					<SidebarMenuItems
						key={idx}
						path={path}
						icon={icon}
						title={title}
						subTitle={subTitle}
					/>
				))}
			</nav>
		</div>
	);
};
