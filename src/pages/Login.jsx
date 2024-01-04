import Header from '../components/Main/Header';
import style from '../components/scss/Login.module.scss';
import Button from '../components/UI/MyButton/MyButton';
import Input from '../components/UI/Input/MyInput';
import { useAuth } from '../components/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const [user, setUser] = useState('');

	const handleLogin = () => {
		auth.login(user);
		navigate('/', { replace: true });
	};

	return (
		<div className={style.login}>
			<Header />
			<div className={style.login__form}>
				<form>
					<h1>Register</h1>
					<label>
						NickName:{' '}
						<Input value={user} onChange={e => setUser(e.target.value)} type='text' name='nick' />
					</label>
				</form>
				<Button onClick={handleLogin}>Login</Button>
			</div>
		</div>
	);
};
