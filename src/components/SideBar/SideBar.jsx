import { useState } from 'react';
import style from '../scss/SideBar.module.scss';
import { FaSteam } from 'react-icons/fa';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { Navigation } from './navigation';

export default function SideBar() {
	const [menuBar, setMenuBar] = useState(false);

	return (
		<>
			<aside
				className={`${style.container} ${menuBar ? style.slide_in : ''}`}
				style={menuBar ? { width: 'auto', display: 'block' } : { width: 0, display: 'none' }}>
				<Link to='/'>
					<div className={style.logo}>
						<span>
							<FaSteam />
						</span>
						<h1>Steam</h1>
					</div>
				</Link>
				<Navigation />
			</aside>
			<div onClick={() => setMenuBar(!menuBar)} className={style.burger__menu}>
				{!menuBar ? <RxHamburgerMenu /> : <RxCross2 />}
			</div>
		</>
	);
}
