import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(localStorage.getItem('user') || null);

	useEffect(() => {
		localStorage.setItem('user', user);
	}, [user]);

	const login = user => {
		setUser(user);
	};

	const logout = () => {
		setUser(false);
	};

	return <Context.Provider value={{ login, logout, user }}>{children}</Context.Provider>;
};

export const useAuth = () => {
	return useContext(Context);
};
