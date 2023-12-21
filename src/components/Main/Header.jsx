import React, { useContext } from 'react';
import style from '../scss/Main.module.scss';
import MyInput from '../UI/Input/MyInput';
import { BiBell } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

export default function Header({ search, setSearch }) {
	const { file } = useContext(Context);

	return (
		<header>
			<div>
				<MyInput
					value={search}
					onChange={e => setSearch(e.target.value)}
					type='text'
					placeholder='Search Games'
				/>
			</div>
			<div className={style.user}>
				<span>
					<BiBell />
				</span>
				<Link to='setting'>
					{!file ? (
						<img src='/public/Images/avatar.jpg' alt='avatar' />
					) : (
						<img src={file} alt='avatar' />
					)}
				</Link>
			</div>
		</header>
	);
}
