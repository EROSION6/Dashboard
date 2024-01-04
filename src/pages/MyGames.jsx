import Header from '../components/Main/Header';
import style from '../components/scss/MyGames.module.scss';
import MyButton from '../components/UI/MyButton/MyButton';
import { Link } from 'react-router-dom';

export default function MyGames() {
	return (
		<div className={style.myGames}>
			<Header />
			<div className={style.text}>
				<h1>You don't have any games &#128553;</h1>
				<Link to='/'>
					<MyButton>Return to Home</MyButton>
				</Link>
			</div>
		</div>
	);
}
