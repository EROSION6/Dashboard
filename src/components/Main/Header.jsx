import { useAuth } from '../Auth/Auth';
import style from '../scss/Main.module.scss';
import MyInput from '../UI/Input/MyInput';
import { useNavigate } from 'react-router-dom';

export default function Header({ search, setSearch, file }) {
	const navigate = useNavigate();
	const auth = useAuth();

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
			{!auth.user ? (
				<div onClick={() => navigate('/login')} className={style.user}>
					{!file ? (
						<img src='/public/Images/avatar.jpg' alt='avatar' />
					) : (
						<img src={file} alt='avatar' />
					)}
				</div>
			) : (
				<div className={style.user}>
					<img src='/public/Images/avatar.jpg' alt='avatar' />
				</div>
			)}
		</header>
	);
}
