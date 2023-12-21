import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DiscoverGames from './pages/DiscoverGames';
import MyGames from './pages/MyGames';
import Setting from './pages/Setting';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import style from './index.module.scss';
import { Context } from './components/Context';

export default function App() {
	const [file, setFile] = useState(null);
	return (
		<Context.Provider
			value={{
				file,
				setFile,
			}}>
			<div className={style.content}>
				<SideBar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='DiscoverGames' element={<DiscoverGames />} />
					<Route path='MyGames' element={<MyGames />} />
					<Route path='Setting' element={<Setting />} />
				</Routes>
			</div>
		</Context.Provider>
	);
}
