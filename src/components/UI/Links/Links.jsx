import { NavLink } from 'react-router-dom';

export const Links = ({ children, to, ...props }) => {
	const styles = ({ isActive }) => {
		return {
			color: isActive ? '#fff' : '#5b616b',
		};
	};

	return (
		<NavLink style={styles} to={to} {...props}>
			{children}
		</NavLink>
	);
};
