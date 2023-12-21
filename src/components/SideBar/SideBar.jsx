import React, { useState } from 'react';
import style from '../scss/SideBar.module.scss';
import { FaGamepad, FaSteam } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { BiBook } from 'react-icons/bi';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export default function SideBar() {
	const [active, setActive] = useState(0);

	const handlerActiveList = i => {
		setActive(i);
	};

	const menuItem = [
		{
			name: 'Home',
			path: '/',
			icon: <GoHome />,
		},
		{
			name: 'Categories',
			path: 'DiscoverGames',
			icon: <BiBook />,
		},
		{
			name: 'My Games',
			path: 'MyGames',
			icon: <TiMessages />,
		},
		{
			name: 'Profile',
			path: '/Setting',
			icon: <PiFinnTheHumanFill />,
		},
	];

	return (
		<aside className={style.container}>
			<Link to='/'>
				<div className={style.logo}>
					<span>
						<FaSteam />
					</span>
					<h1>Steam</h1>
				</div>
			</Link>
			<div className={style.listStyle}>
				<nav>
					<ul>
						{menuItem.map((item, i) => (
							<Link key={i} to={item.path}>
								<li
									style={{ color: active === i ? '#fff' : '#5B616B' }}
									onClick={() => handlerActiveList(i)}>
									<span>{item.icon}</span>
									<a href='#'>{item.name}</a>
								</li>
							</Link>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
}
