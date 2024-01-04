import { Routes, Route } from 'react-router-dom';
import DiscoverGames from './pages/DiscoverGames';
import MyGames from './pages/MyGames';
import Setting from './pages/Setting';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import style from './index.module.scss';
import { AuthProvider } from './components/Auth/Auth';
import { Login } from './pages/Login';

export default function App() {
	return (
		<AuthProvider>
			<div className={style.content}>
				<SideBar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='DiscoverGames' element={<DiscoverGames />} />
					<Route path='MyGames' element={<MyGames />} />
					<Route path='setting' element={<Setting />} />
					<Route path='login' element={<Login />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}
