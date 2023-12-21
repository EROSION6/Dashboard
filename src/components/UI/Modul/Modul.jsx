import React from 'react';
import style from './Modul.module.scss';

function Modul({ setModalActive, children, ...props }) {
	return (
		<div onClick={() => setModalActive(false)} {...props} className={style.overflow}>
			<div onClick={e => e.stopPropagation()} className={style.content_block}>
				{children}
			</div>
		</div>
	);
}

export default Modul;
