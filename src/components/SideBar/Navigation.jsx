import style from '../scss/SideBar.module.scss';
import { Links } from '../UI/Links/Links';
import { useAuth } from '../Auth/Auth';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { navigationItem } from '../data/data';

export const Navigation = () => {
	const auth = useAuth();

	return (
		<div className={style.listStyle}>
			<nav>
				<ul>
					{auth.user ? (
						<>
							{navigationItem.map((item, i) => (
								<Links key={i} to={item.path}>
									<li className={style.listBar}>
										<span>{item.icon}</span>
										<a href='#'>{item.name}</a>
									</li>
								</Links>
							))}
						</>
					) : (
						<>
							{navigationItem.slice(0, 3).map((item, i) => (
								<Links key={i} to={item.path}>
									<li className={style.listBar}>
										<span>{item.icon}</span>
										<a href='#'>{item.name}</a>
									</li>
								</Links>
							))}
							<Links to='/login'>
								<li className={style.listBar}>
									<span>
										<PiFinnTheHumanFill />
									</span>
									<a href='#'>Login</a>
								</li>
							</Links>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
};
